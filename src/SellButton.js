import React from 'react';

class SellButton extends React.PureComponent {
  state = {
    goodType: "pottery",
    quantity: 1
  }

  render() {
    const { sell, availableGoods, goods } = this.props;
    const { quantity, goodType } = this.state;

    return (
      <div>
        <input type="number" onChange={({ target }) => this.setState({ quantity: target.value })} value={quantity} />
        <select onChange={({ target }) => this.setState({ goodType: target.value })} value={goodType}>
          {availableGoods.map((type, i) => <option value={type} key={i}>{type} ({goods[type].price} gold each)</option>)}
        </select>
        <button onClick={() => sell({ goodType, quantity: parseInt(quantity, 10), goods })}>Sell</button>
      </div>
    )
  }
}

export default SellButton;
