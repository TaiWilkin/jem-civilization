
export const researchSomething = ({ research, category, researchCategories }) => {
  return (dispatch, getState) => {
    const categoryObject = researchCategories[category];
    const { level, cost } = categoryObject;
    if (cost > research) {
      dispatch({
        type: 'message',
        message: `You need ${cost} research points to research ${category}.`
      });
    } else {
      switch(category) {
        case 'weapons':
        dispatch({
          type: 'research_weapons',
          cost,
          message: 'You researched weapons. Now you earn more food and furs from hunting.'
        });
        break;
        case 'goods':
        if (level === 0) {
          dispatch({ type: 'research_goods', cost });
        } else if (level === 1) {
          dispatch({
            type: 'research_goods',
            cost,
            good: 'carving'
          })
        } else if (level === 2) {
          dispatch({
            type: 'research_goods',
            cost,
            good: 'masonry'
          })
        } else if (level === 3) {
          dispatch({
            type: 'research_goods',
            cost,
            good: 'glass'
          })
        } else if (level === 4) {
          dispatch({
            type: 'research_goods',
            cost,
            good: 'metal'
          })
        } else {
          dispatch({ type: 'message', message: 'There are no more goods to research.'})
        }
        break;
        case 'farming':
        dispatch({
          type: 'research_farming',
          cost,
          message: 'You researched farming. Now you earn more food from each harvest.'
        })
        break;
        case 'science':
        dispatch({
          type: 'research_science',
          cost,
          message: 'You researched science. Now your scientists earn an additional research point when they work.'
        });
        break;
        case 'buildings':
        const building = level + 2;
        if (building > 6) {
          dispatch({ type: 'message', message: 'You have fully researched buildings.'});
        } else {
          dispatch({
            type: 'research_buildings',
            level: building,
            cost,
            message: 'You researched buildings. Now you have access to a new type of building.'
          });
        }
        break;
        default:
        dispatch({
          type: 'message',
          message: `Error researching.`
        });
      }
    }
  }
}
