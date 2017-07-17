import React from 'react';

class ActionButton extends React.PureComponent {
  state = {
    quantity: 1
  }

  render() {
    const { peopleAvailable, action, worker, name } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <input type="number" onChange={({ target }) => this.setState({ quantity: target.value })} value={quantity} />
        <button onClick={() => action({ peopleAvailable, worker, quantity: parseInt(quantity, 10) })}>{name}</button>
      </div>
    )
  }
}

export default ActionButton;
