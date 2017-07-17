//@flow

import { welcomeMessage } from './constants';

type stateType = {
  people: number,
  peopleAvailable: number,
  food: number,
  research: number,
  land: number,
  housing: number,
  gold: number,
  turn: number,
  message: string
}

const INITIAL_STATE: stateType = {
  people: 2,
  peopleAvailable: 2,
  food: 40,
  research: 0,
  land: 5,
  housing: 0,
  gold: 0,
  turn: 1,
  message: welcomeMessage
}

const reducer = (state: Object = INITIAL_STATE, action: Object): stateType => {
  switch(action.type) {
    case 'LOAD_STORED_STATE':
      return action.storedState.game;
    case 'CLEAR_STORED_STATE':
        return INITIAL_STATE;
    case 'end_turn':
    return {
      ...state,
      people: action.people,
      peopleAvailable: action.people,
      food: action.food,
      message: action.message,
      turn: state.turn + 1
    }

    case 'message':
    return {
      ...state,
      message: action.message
    }
    case 'build':
    return {
      ...state,
      message: action.message,
      housing: action.housing,
      land: action.land,
      gold: state.gold - action.gold,
      peopleAvailable: state.peopleAvailable - 1
    }

    case 'hunt':
      return {
        ...state,
        peopleAvailable: state.peopleAvailable - action.quantity,
        food: state.food + action.food,
        message: action.message
      }

      case 'farm':
        return {
          ...state,
          peopleAvailable: state.peopleAvailable - action.quantity,
          food: state.food + action.food,
          message: action.message
        }

    case 'train':
      return {
        ...state,
        peopleAvailable: state.peopleAvailable - action.quantity,
        message: action.message
      }

      case 'craft':
        return {
          ...state,
          peopleAvailable: state.peopleAvailable - action.quantity,
          message: action.message
        }

      case 'research':
        return {
          ...state,
          peopleAvailable: state.peopleAvailable - action.quantity,
          research: state.research + action.points,
          message: action.message
        }
        case 'research_weapons':
        return {
          ...state,
          research: state.research - action.cost,
          message: action.message
        }
        case 'research_farming':
        return {
          ...state,
          research: state.research - action.cost,
          message: action.message
        }
        case 'research_buildings':
        return {
          ...state,
          research: state.research - action.cost,
          message: action.message
        }
        case 'research_goods':
        return {
          ...state,
          research: state.research - action.cost,
          message: 'You researched goods and crafting.'
        }
        case 'research_science':
        return {
          ...state,
          research: state.research - action.cost,
          message: action.message
        }
        case 'sell':
        return {
          ...state,
          gold: state.gold + action.gold,
          message: action.message
        }
        case 'trade':
        return {
          ...state,
          land: state.land + 1,
          message: action.message
        }
        case 'buy':
        return {
          ...state,
          gold: state.gold - action.quantity,
          message: action.message,
          food: state.food + (action.quantity * 10)
        }
    default:
    return state;
  }
}

export default reducer;
