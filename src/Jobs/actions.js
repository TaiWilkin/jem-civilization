export const hunt = ({ peopleAvailable, worker, quantity }) => {
  return dispatch => {
    if (peopleAvailable < quantity || worker.available_workers < quantity) {
      dispatch({
        type: 'message',
        message: "You don't have enough unassigned workers for this action."
      });
    } else {
      const furs = worker.fursPerHunt * quantity;
      const food = worker.foodPerHunt * quantity;
      dispatch({
        type: 'hunt',
        food,
        furs,
        quantity,
        message: `You hunted ${quantity} times and gained ${food} food and ${furs} furs.`
      });
    }
  }
}

export const farm = ({ peopleAvailable, worker, quantity }) => {
  return dispatch => {
    if (peopleAvailable < quantity || worker.available_workers < quantity) {
      dispatch({
        type: 'message',
        message: "You don't have enough unassigned workers for this action."
      });
    } else {
      const food = worker.foodPerFarm * quantity;
      dispatch({
        type: 'farm',
        food,
        quantity,
        message: `You farmed ${quantity} times and harvested ${food} food.`
      });
    }
  }
}

export const train = ({ peopleAvailable, jobType, quantity, people, jobs }) => {
  return dispatch => {
    if(peopleAvailable < quantity) {
      dispatch({
        type: 'message',
        message: "You don't have enough unassigned workers for this action."
      });
    } else if (people < jobs[jobType].workers + quantity) {
      dispatch({
        type: 'message',
        message: `You can't have more ${jobType}s than people.`
      });
    } else {
      dispatch({
        type: 'train',
        job: jobType,
        quantity,
        message: `You trained ${quantity} ${jobType}(s).`
      });
    }
  }
}

export const research = ({ peopleAvailable, worker, quantity }) => {
  return dispatch => {
    if (peopleAvailable < quantity || worker.available_workers < quantity) {
      dispatch({
        type: 'message',
        message: "You don't have enough unassigned workers for this action."
      });
    } else {
      const points = worker.pointsPerResearch * quantity;
      dispatch({
        type: 'research',
        points,
        quantity,
        message: `You researched ${quantity} times and gained ${points} knowledge points.`
      });
    }
  }
}

export const craft = ({ peopleAvailable, worker, quantity, goodType }) => {
  return dispatch => {
    if (peopleAvailable < quantity || worker.available_workers < quantity) {
      dispatch({
        type: 'message',
        message: "You don't have enough unassigned workers for this action."
      });
    } else {
      dispatch({
        type: 'craft',
        good: goodType,
        quantity,
        message: `You crafted ${quantity} ${goodType}.`
      });
    }
  }
}

export const sell = ({ goods, goodType, quantity }) => {
  return dispatch => {
    if (goods[goodType.quantity < quantity]) {
      dispatch({
        type: 'message',
        message: "You don't have enough goods for this action."
      });
    } else {
      dispatch({
        type: 'sell',
        gold: goods[goodType].price * quantity,
        quantity,
        good: goodType,
        message: `You sold ${quantity} ${goodType}`
      });
    }
  }
}

export const negotiate = ({ goodType, goods, jobs }) => {
  return dispatch => {
    if (goods[goodType].offers <= 0) {
      dispatch({
        type: 'message',
        message: "This trade is already free. You cannot negotiate it any lower."
      });
    } else if (jobs.trader.known && jobs.trader.available_workers > 0) {
        dispatch({ type: 'negotiate', good: goodType });
      } else {
      dispatch({
        type: 'message',
        message: "You don't have enough traders for this action."
      });
    }
  }
}

export const trade = ({ goodType, goods }) => {
  return dispatch => {
    const good = goods[goodType];
    if (good.quantity < good.offers) {
      dispatch({
        type: 'message',
        message: "You don't have enough goods for this action."
      });
    } else {
      dispatch({
        type: 'trade',
        good: goodType,
        message: "You traded goods for land."
      });
    }
  }
}

export const buy = ({ quantity, gold }) => {
  return (dispatch) => {
    if (gold < quantity) {
      dispatch({
        type: 'message',
        message: `You don't have ${quantity} gold to spend.`
      });
    } else {
      dispatch({
        type: 'buy',
        quantity,
        message: "You traded gold for food."
      });
    }
  }
}
