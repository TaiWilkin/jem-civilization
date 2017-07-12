import React from 'react';

class SellButton extends React.PureComponent {
  state = {
    goodType: "pottery",
  }

  render() {
    const { trade, availableGoods, goods, negotiate, jobs } = this.props;
    const { goodType } = this.state;

    return (
      <div>
        <select onChange={({ target }) => this.setState({ goodType: target.value })} value={goodType}>
          {availableGoods.map((type, i) => <option value={type} key={i}>{goods[type].offers} {type}</option>)}
        </select>
        <button onClick={() => trade({ goodType, goods })}>Trade for Land</button>
        {jobs.trader.known ? <button onClick={() => negotiate({ goodType, jobs, goods })}>Negotiate</button> : null}
      </div>
    )
  }
}

export default SellButton;
