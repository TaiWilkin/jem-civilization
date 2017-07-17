import React from 'react';

class BuildButton extends React.PureComponent {
  state = {
    buildingType: "hut",
    quantity: 1
  }

  render() {
    const { housing, land, peopleAvailable, build, availableBuildings, workers, goods, gold } = this.props;
    const { quantity, buildingType } = this.state;

    return (
      <div>
        <input type="number" onChange={({ target }) => this.setState({ quantity: target.value })} value={quantity} />
        <select onChange={({ target }) => this.setState({ buildingType: target.value })} value={buildingType}>
          {availableBuildings.map((type, i) => <option value={type} key={i}>{type}</option>)}
        </select>
        <button onClick={() => build({ housing, land, buildingType, quantity: parseInt(quantity, 10), peopleAvailable, workers, goods, gold })}>Build</button>
      </div>
    )
  }
}

export default BuildButton;
