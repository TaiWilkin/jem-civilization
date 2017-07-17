//@flow
type stateType = Object;

const INITIAL_STATE: stateType = {
  furs: {
    name: 'furs',
    quantity: 0,
    price: 1,
    offers: 5,
    known: false
  },
  pottery: {
    name: 'pottery',
    quantity: 4,
    price: 2,
    offers: 5,
    known: true
  },
  wood: {
    name: 'wood',
    quantity: 0,
    price: 4,
    offers: 5,
    known: false
  },
  stone: {
    name: 'stone',
    quantity: 0,
    price: 6,
    offers: 5,
    known: false
  },
  glass: {
    name: 'glass',
    quantity: 0,
    price: 9,
    offers: 5,
    known: false
  },
  metal: {
    name: 'metal',
    quantity: 0,
    price: 10,
    offers: 5,
    known: false
  }
}

const reducer = (state: Object = INITIAL_STATE, action: Object): stateType => {
  switch(action.type) {

    case 'LOAD_STORED_STATE':
    return action.storedState.goods;
    case 'CLEAR_STORED_STATE':
    return INITIAL_STATE;
    case 'hunt':
    return {
      ...state,
      furs: {
        ...state.furs,
        quantity: state.furs.quantity + action.furs
      }
    }
    case 'research_weapons':
    return {
      ...state,
      furs: {
        ...state.furs,
        known: true
      }
    }
    case 'research_goods':
    if (action.good) {
      return {
        ...state,
        [action.good]: {
          ...state[action.good],
          known: true
        }
      }
    } else {
      return state;
    }
    case 'craft':
    return {
      ...state,
      [action.good]: {
        ...state[action.good],
        quantity: state[action.good].quantity + action.quantity
      }
    }
    case 'build':
    return {
      ...state,
      [action.good]: {
        ...state[action.good],
        quantity: state[action.good].quantity - action.goodQuantity
      }
    }
    case 'sell':
    return {
      ...state,
      [action.good]: {
        ...state[action.good],
        quantity: state[action.good].quantity - action.quantity
      }
    }
    case 'negotiate':
    return {
      ...state,
      [action.good]: {
        ...state[action.good],
        offers: state[action.good].offers - 1
      }
    }
    case 'trade':
    return {
      ...state,
      [action.good]: {
        ...state[action.good],
        quantity: state[action.good].quantity - state[action.good].offers,
        offers: state[action.good].offers + 5
      }
    }
    default:
    return state;
  }
}

export default reducer;
