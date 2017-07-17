import React from 'react';
import { connect } from 'react-redux';

class Stats extends React.PureComponent {
  renderJob(job, i) {
    if (job.known) {
      return <li key={i}>{job.name}: {job.available_workers}/{job.workers}</li>
    }
  }

  renderGood(good, i) {
    if (good.known) {
      return <li key={i}>{good.name}: {good.quantity}</li>
    }
  }

  render() {
    const {
      people,
      peopleAvailable,
      gold,
      food,
      land,
      housing,
      research,
      jobs,
      goods,
      message,
      turn
    } = this.props;
    return (
      <div>
        <p className="message">{message}</p>
      <div className="left">
        <p>Goods</p>
        <ul>
          {Object.keys(goods).map((good, i) => this.renderGood(goods[good], i))}
        </ul>
        <p>People</p>
        <ul>
          {Object.keys(jobs).map((job, i) => this.renderJob(jobs[job], i))}
          <li>TOTAL: {peopleAvailable}/{people}</li>
        </ul>
      </div>
      <div className="right">
      <p>Year: {turn}</p>
      <p>Gold: {gold}</p>
      <p>Food: {food}</p>
      <p>Land: {land}</p>
      <p>Housing: {housing}</p>
      <p>Research points: {research}</p>
    </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    people,
    peopleAvailable,
    gold,
    food,
    land,
    housing,
    research,
    message,
    turn
  } = state.game;
  return {
    people,
    peopleAvailable,
    gold,
    food,
    land,
    housing,
    research,
    jobs: state.jobs,
    goods: state.goods,
    message,
    turn
  }
}

export default connect(mapStateToProps, { })(Stats);
