import { combineReducers } from 'redux';
import game from './Items/reducer';
import buildings from './Buildings/reducer';
import jobs from './Jobs/reducer';
import goods from './Goods/reducer';
import researchCategories from './ResearchCategories/reducer'
export default combineReducers({
  game,
  buildings,
  jobs,
  goods,
  researchCategories
});
