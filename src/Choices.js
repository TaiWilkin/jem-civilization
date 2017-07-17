import React from 'react';
import { connect } from 'react-redux';
import { build } from './Buildings/actions';
import { hunt, train, research, farm, craft, sell, trade, negotiate, buy } from './Jobs/actions';
import BuildButton from './BuildButton';
import TrainButton from './TrainButton';
import ActionButton from './ActionButton';
import CraftButton from './CraftButton';
import SellButton from './SellButton';
import TradeButton from './TradeButton';
import BuyFoodButton from './BuyFoodButton';

const getKnown = (object) => {
  return Object.keys(object).filter((id) => object[id].known);
}

class Choices extends React.PureComponent {
  render() {
    const { housing, land, peopleAvailable, build, buildings, hunt, jobs, train, research, goods, farm, people, craft, gold, sell, trade, negotiate, buy } = this.props;
    const availableBuildings = getKnown(buildings).map(id => buildings[id].name);
    const availableJobs = getKnown(jobs).map(id => jobs[id].name);
    const availableGoods = getKnown(goods).map(id => goods[id].name);
    return (
        <div className="buttons">
          <BuyFoodButton action={buy} gold={gold} />
          <SellButton sell={sell} availableGoods={availableGoods} goods={goods} />
          {peopleAvailable > 0 ?
            <div>
            <BuildButton housing={housing} build={build} land={land} peopleAvailable={peopleAvailable} workers={jobs.builder.available_workers} goods={goods} availableBuildings={availableBuildings} gold={gold} />
            {jobs.hunter.available_workers > 0 ? <ActionButton peopleAvailable={peopleAvailable} action={hunt} worker={jobs.hunter} name="Hunt" /> : null}
            {jobs.scientist.available_workers > 0 ? <ActionButton peopleAvailable={peopleAvailable} action={research} worker={jobs.scientist} name="Research" /> : null}
            {jobs.farmer.available_workers > 0 ? <ActionButton peopleAvailable={peopleAvailable} action={farm} worker={jobs.farmer} name="Farm" /> : null}
            {jobs.craftsman.available_workers > 0 ? <CraftButton craft={craft} peopleAvailable={peopleAvailable} availableGoods={availableGoods} worker={jobs.craftsman} /> : null}
            <TradeButton trade={trade} negotiate={negotiate} availableGoods={availableGoods} goods={goods} jobs={jobs} />
            <TrainButton train={train} peopleAvailable={peopleAvailable} availableJobs={availableJobs} people={people} jobs={jobs} />
          </div> : <p>No workers available. End turn or start new game.</p>}
        </div>
    )
  }
}

const mapStateToProps = ({ game, buildings, jobs, goods }) => {
  return {
    housing: game.housing,
    land: game.land,
    peopleAvailable: game.peopleAvailable,
    buildings,
    food: game.food,
    jobs, goods,
    people: game.people,
    gold: game.gold
  };
}

export default connect(mapStateToProps, { build, hunt, train, research, farm, craft, sell, trade, negotiate, buy })(Choices);
