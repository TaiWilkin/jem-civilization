import React from 'react';

class CraftButton extends React.PureComponent {
  state = {
    goodType: "pottery",
    quantity: 1
  }

  render() {
    const { peopleAvailable, craft, availableGoods, worker } = this.props;
    const { quantity, goodType } = this.state;

    return (
      <div>
        <input type="number" onChange={({ target }) => this.setState({ quantity: target.value })} value={quantity} />
        <select onChange={({ target }) => this.setState({ goodType: target.value })} value={goodType}>
          {availableGoods.map((type, i) => <option value={type} key={i}>{type}</option>)}
        </select>
        <button onClick={() => craft({ goodType, quantity, peopleAvailable, worker })}>Craft</button>
      </div>
    )
  }
}

export default CraftButton;
