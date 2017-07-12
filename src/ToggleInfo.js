import React from 'react';

class ToggleInfo extends React.PureComponent {
  state = {
    tab: 'jobs'
  }

  render() {
    return (
      <div className="info">
        <h2>Information</h2>
        {this.state.tab === 'jobs' ? <p>JOBS: Your population must be greater than or equal to your assigned workers. You must have as many workers trained in each job as you have doing it. For example, if you have 3 workers available but only 1 is trained as a hunter, you will not be able to hunt. Scientists earn research points, farmers earn food, hunters earn food and (on higher levels) furs, traders lower the cost of land, builders create housing, and craftsmen create goods. You may also enter 'train' to increase the number of workers you can assign to a job at a time.</p> : <button onClick={() => this.setState({ tab: 'jobs' })}>Jobs</button>}
        {this.state.tab === 'goods' ? <p>GOODS: Goods can be sold for gold, used to store food, or traded for more land.</p> : <button onClick={() => this.setState({ tab: 'goods' })}>Goods</button>}
        {this.state.tab === 'actions' ? <div><p>ACTIONS:</p>
          <ul>
        <li>end turn: food is eaten, people die of starvation or exposure if applicable, person born for each two people not working</li>
       <li>sell: sell food or other products for gold</li>
       <li>build: add housing</li>
       <li>farm: add food</li>
       <li>hunt: add food and on higher levels furs</li>
       <li>train: teach your people to do jobs to increase the number of workers who can do the job at once</li>
       <li>research: spend research points to unlock jobs, goods, and buildings. Scientists create research points.</li>
       <li>expand: give goods to a neighbor to gain more land</li>
       </ul>
     </div> : <button onClick={() => this.setState({ tab: 'actions' })}>Actions</button>}
     {this.state.tab === 'research' ? <div><p>RESEARCH:</p>
       <ul>
         <li>All categories initially cost 3 research points, but the cost increases by three each time you research in that category.</li>
         <li>weapons: research a stronger weapon, which will allow your hunter to catch ten more food and find one more fur each time they hunt.</li>
         <li>farming: first time researched, allows you to begin training farmers, who earn 45 food when they farm. Harvest increases by 15 food each time you research.</li>
         <li>building: first time researched, allows you to begin training builders, who can create better housing than huts. Available structures improve each time you research.</li>
         <li>goods: first time researched, allows you to begin training craftsmen, who create goods. The first good is pottery, which can store 20 food each. Goods can be sold for gold.</li>
         <li>science: first time researched, allows you to begin training traders, who negotiate lower costs for land. Additional research increases points earned by scientists by 1 point. </li>
    </ul>
  </div> : <button onClick={() => this.setState({ tab: 'research' })}>Research</button>}
      </div>
    )
  }

}

export default ToggleInfo;
