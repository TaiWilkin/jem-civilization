//@flow
type stateType = Object;

const INITIAL_STATE: stateType = {
  1: {
    name: 'hut',
    known: true
  },
  2: {
    name: 'shack',
    known: false
  },
  3: {
    name: 'longhouse',
    known: false
  },
  4: {
    name: 'house',
    known: false
  },
  5: {
    name: 'mansion',
    known: false
  },
  6: {
    name: 'apartments',
    known: false
  }
}

const reducer = (state: Object = INITIAL_STATE, action: Object): stateType => {
  switch(action.type) {
    case 'research_buildings':
      return {
        ...state,
        [action.level]: {
          ...state[action.level],
          known: true
        }
      }
    default:
    return state;
  }
}

export default reducer;
