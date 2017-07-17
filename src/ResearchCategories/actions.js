
export const researchSomething = ({ research, category, researchCategories }) => {
  return (dispatch, getState) => {
    const categoryObject = researchCategories[category];
    const { level, cost } = categoryObject;
    let message;
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
            good: 'wood'
          })
        } else if (level === 2) {
          dispatch({
            type: 'research_goods',
            cost,
            good: 'stone'
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
        if (level === 0) {
          message = 'You researched science for the first time. Now you have access to a trader.';
        } else {
          message = 'You researched science. Now your scientists earn an additional research point when they work.'
        }
        dispatch({
          type: 'research_science',
          cost,
          message
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
