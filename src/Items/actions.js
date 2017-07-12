//@flow

const disasterCheck = (people) => {
  const number = Math.round(Math.random() * 20);
  if (number === 15) {
    return disaster(people);
  }
  else {
    return {
      people,
      message: ' There were no disasters.'
    }
  }
}

const disaster = (people) => {
    const number = Math.round(Math.random() * 5);
    let death = 0;
    switch(number) {
      case 0:
      death = Math.floor(people / 7);
      return {
        people: people - death,
        message: `There was heavy snow! ${death} people died.`
      }
      case 1:
      death = Math.floor(people / 6);
      return {
        people: people - death,
        message: `There was flooding! ${death} people died.`
      }
      case 2:
      death = Math.floor(people / 5);
      return {
        people: people - death,
        message: `There were pirates! ${death} people died.`
      }
      case 3:
      death = Math.floor(people / 4);
      return {
        people: people - death,
        message: `There was a hurricane! ${death} people died.`
      }
      case 4:
      death = Math.floor(people / 3);
      return {
        people: people - death,
        message: `There was a tornado! ${death} people died.`
      }
      case 5:
      death = Math.floor(people / 2);
      return {
        people: people - death,
        message: `There was a plague! ${death} people died.`
      }
      default:
      return {
        people: 0,
        message: `Volcano! No one died.`
      }
    }
}

export const endTurn = ({ people, food, housing, message, peopleAvailable, goods }) => {
  return dispatch => {

    let resultPeople = people;
    let resultFood = food -= (resultPeople * 20);
    let message = 'A year has passed. ';
    let starved = 0;
    let died = 0;

    if (resultFood < 0) {
      starved = Math.floor(-1 * (resultFood / 20));
      resultPeople -= starved;
      message += `${starved} people died of starvation, leaving ${resultPeople} people. `
    }

    if (housing < resultPeople) {
      died = resultPeople - housing;
      resultPeople -= died;
      message += `${died} people died of exposure from lack of housing, leaving ${resultPeople}. `
    }

    if (peopleAvailable > 1) {
      const babies = Math.floor((peopleAvailable - (starved + died))/2);
      resultPeople += babies;
      if (babies > 0) {
        message += `${babies} people are born from idle workers, increasing your population to ${resultPeople}. `
      }
    }

    let foodStorage = goods.pottery.quantity * 20;
    if (resultFood > foodStorage) {
      let spoiledFood = resultFood - foodStorage;
      resultFood = foodStorage;
      message += `${spoiledFood} food spoiled due to lack of storage. You have ${resultFood} food remaining. `
    }

    if (resultPeople < 2) {
      message += "You do not have enough people remaining to grow your population. You lose."
    }

    if (resultPeople < 0) {
      resultPeople = 0;
    }

    if (resultFood < 0) {
      resultFood = 0;
    }

    const disaster = disasterCheck(resultPeople);
    message += disaster.message;
    if (disaster.people >= 100) {
      message = "You have reached a population of 100! You win!"
    }

    dispatch({  type: 'end_turn',
      people: disaster.people,
      food: resultFood,
      message: message });
  }
}

export const newGame = () => ({
  type: 'CLEAR_STORED_STATE'
})
