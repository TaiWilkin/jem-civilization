import React from 'react';
import { connect } from 'react-redux';
import { endTurn, newGame } from './Items/actions';

class EndTurn extends React.PureComponent {

  render() {
    const {
      people,
      peopleAvailable,
      food,
      housing,
      goods,
      message
    } = this.props;
    return (
      <div>
        <button className="end" onClick={() => this.props.endTurn({ people, food, housing, message, peopleAvailable, goods })}>End Turn</button>
        <button onClick={() => this.props.newGame()}>New Game</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    people,
    peopleAvailable,
    food,
    housing,
    message
  } = state.game;
  return {
    people,
    peopleAvailable,
    food,
    housing,
    goods: state.goods,
    message
  }
}

export default connect(mapStateToProps, { endTurn, newGame })(EndTurn);
