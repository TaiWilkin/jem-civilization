//@flow

type stateType = Object;

const INITIAL_STATE: stateType = {
  weapons: {
    cost: 3,
    level: 1
  },
  goods: {
    cost: 3,
    level: 0
  },
  farming: {
    cost: 3,
    level: 0
  },
  science: {
    cost: 3,
    level: 0
  },
  buildings: {
    cost: 3,
    level: 0
  }
}

const reducer = (state: Object = INITIAL_STATE, action: Object): stateType => {
  switch(action.type) {
    case 'research_weapons':
    return {
      ...state,
      weapons: {
        ...state.weapons,
        cost: state.weapons.cost + 3,
        level: state.weapons.level + 1
      }
    }
    case 'research_farming':
    return {
      ...state,
      farming: {
        ...state.farming,
        cost: state.farming.cost + 3,
        level: state.farming.level + 1
      }
    }
    case 'research_buildings':
    return {
      ...state,
      buildings: {
        ...state.buildings,
        cost: state.buildings.cost + 3,
        level: state.buildings.level + 1
      }
    }
    case 'research_goods':
    return {
      ...state,
      goods: {
        ...state.goods,
        cost: state.goods.cost + 3,
        level: state.goods.level + 1
      }
    }
    case 'research_science':
    return {
      ...state,
      science: {
        ...state.science,
        cost: state.science.cost + 3,
        level: state.science.level + 1
      }
    }
    default:
    return state;
  }
}

export default reducer;
