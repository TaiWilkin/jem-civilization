import React from 'react';

class BuyFoodButton extends React.PureComponent {
  state = {
    quantity: 1
  }

  render() {
    const { action, gold } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <input type="number" onChange={({ target }) => this.setState({ quantity: target.value })} value={quantity} />
        <button onClick={() => action({ quantity: parseInt(quantity, 10), gold })}>Buy 10 Food with 1 Gold</button>
      </div>
    )
  }
}

export default BuyFoodButton;
