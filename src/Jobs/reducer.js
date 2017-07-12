//@flow

type stateType = {
  people: number,
  peopleAvailable: number, //also this is hut and train
  jobs: Object,
  food: number,
  research: number,
  science: number,
  land: number,
  housing: number,
  gold: number,
  food_storage: number,
  goods: Object,
  buildings: Object,
  researchCategories: Object,
  turn: number
}

const INITIAL_STATE: stateType = {
  hunter: {
    workers: 1,
    available_workers: 1,
    known: true,
    foodPerHunt: 45,
    fursPerHunt: 0,
    name: 'hunter'
  },
  scientist: {
    workers: 1,
    available_workers: 1,
    known: true,
    name: 'scientist',
    pointsPerResearch: 1
  },
  trader: {
    workers: 0,
    available_workers: 0,
    known: false,
    name: 'trader'
  },
  farmer: {
    workers: 0,
    available_workers: 0,
    known: false,
    foodPerFarm: 25,
    name: 'farmer'
  },
  builder: {
    workers: 0,
    available_workers: 0,
    known: false,
    name: 'builder'
  },
  craftsman: {
    workers: 0,
    available_workers: 0,
    known: false,
    name: 'craftsman'
  }
}

const reducer = (state: Object = INITIAL_STATE, action: Object): stateType => {
  switch(action.type) {
    case 'end_turn':
    return {
      ...state,
      hunter: {
        ...state.hunter,
        available_workers: state.hunter.workers
      },
      scientist: {
        ...state.scientist,
        available_workers: state.scientist.workers
      },
      trader: {
        ...state.trader,
        available_workers: state.trader.workers
      },
      farmer: {
        ...state.farmer,
        available_workers: state.farmer.workers
      },
      builder: {
        ...state.builder,
        available_workers: state.builder.workers
      },
      craftsman: {
        ...state.craftsman,
        available_workers: state.craftsman.workers
      }
    }

    case 'hunt':
    return {
      ...state,
      hunter: {
        ...state.hunter,
        available_workers: state.hunter.available_workers - action.quantity
      }
    }

    case 'farm':
    return {
      ...state,
      farmer: {
        ...state.farmer,
        available_workers: state.farmer.available_workers - action.quantity
      }
    }

    case 'train':
    return {
      ...state,
      [action.job]: {
        ...state[action.job],
        workers: state[action.job].workers + action.quantity
      }
    }

    case 'research':
    return {
      ...state,
      scientist: {
        ...state.scientist,
        available_workers: state.scientist.available_workers - action.quantity
      }
    }

    case 'build':
    return {
      ...state,
      builder: {
        ...state.builder,
        available_workers: state.builder.available_workers - action.people
      }
    }
    case 'craft':
    return {
      ...state,
      craftsman: {
        ...state.craftsman,
        available_workers: state.craftsman.available_workers - action.quantity
      }
    }

    case 'negotiate':
    return {
      ...state,
      trader: {
        ...state.trader,
        available_workers: state.trader.available_workers - 1
      }
    }
    case 'research_weapons':
    return {
      ...state,
      hunter: {
        ...state.hunter,
        fursPerHunt: state.hunter.fursPerHunt + 1,
        foodPerHunt: state.hunter.foodPerHunt + 5,
      }
    }
    case 'research_farming':
    return {
      ...state,
      farmer: {
        ...state.farmer,
        known: true,
        foodPerFarm: state.farmer.foodPerFarm + 10
      }
    }
    case 'research_buildings':
    return {
      ...state,
      builder: {
        ...state.builder,
        known: true
      }
    }
    case 'research_goods':
    return {
      ...state,
      craftsman: {
        ...state.craftsman,
        known: true
      }
    }
    case 'research_science':
    if(state.trader.known) {
      return {
        ...state,
        scientist: {
          ...state.scientist,
          pointsPerResearch: state.scientist.pointsPerResearch + 1
        }
      }
    } else {
      return {
        ...state,
        trader: {
          ...state.trader,
          known: true
        }
      }
    }


    default:
    return state;
  }
}

export default reducer;
