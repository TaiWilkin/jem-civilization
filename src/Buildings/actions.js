const buildings = {
  hut: {
    type: "hut",
    cost: 0,
    land: 1,
    housing: 2,
    goods: "pottery"
  },
  shack: {
    type: "shack",
    cost: 4,
    land: 2,
    housing: 5,
    goods: "pottery"
  },
  longhouse: {
    type: "longhouse",
    cost: 8,
    land: 3,
    housing: 7,
    goods: "wood"
  },
  house: {
    type: "house",
    cost: 12,
    land: 4,
    housing: 10,
    goods: "stone"
  },
  mansion: {
    type: "mansion",
    cost: 16,
    land: 5,
    housing: 15,
    goods: "glass"
  },
  apartments: {
    type: "apartments",
    cost: 20,
    land: 5,
    housing: 25,
    goods: "metal"
  }
}

export const build = ({ housing, land, buildingType, quantity, peopleAvailable, workers, goods, gold }) => {
  return dispatch => {
    const building = buildings[buildingType];
    if (buildingType !== "hut" && quantity > workers) {
      dispatch({
        type: 'message',
        message: 'You do not have enough builders available to build this.'
      })
    } else {
      let people = quantity;
      let goodQuantity = quantity;
      if (buildingType === "hut") {
        people = 0;
        goodQuantity = 0;
      }
      if (land < (building.land * quantity)) {
        dispatch({
          type: 'message',
          message: "You do not have enough unused land to build this. Try to expand."
        });
      } else if (quantity > peopleAvailable) {
        dispatch({
          type: 'message',
          message: "You don't have enough unassigned workers for this action."
        });
      } else if (building.type !== "hut" && (!goods[building.goods].quantity < 1 || building.cost > gold)) {
        console.log(goods[building.goods].quantity, building.cost, gold)
        dispatch({ type: 'message',
          message: `This type of building costs ${building.cost} gold and 1 ${building.goods} to build.`
        });
      } else {
        dispatch({
          type: 'build',
          housing: housing + (building.housing * quantity),
          land: land - (building.land * quantity),
          people,
          gold: building.cost,
          good: building.goods,
          goodQuantity,
          message: `You have built ${quantity} ${buildingType}(s). This will house ${building.housing * quantity} people, but takes up ${building.land * quantity} square(s) of land and occupies ${quantity} worker(s) for a turn.`
        });
      }
    }
  }
}
