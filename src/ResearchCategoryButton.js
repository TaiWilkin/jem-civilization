import React from 'react';

class ResearchButton extends React.PureComponent {
  state = {
    quantity: 1
  }

  render() {
    const { peopleAvailable, research, scientist } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <input type="number" onChange={({ target }) => this.setState({ quantity: target.value })} value={quantity} />
        <button onClick={() => research({ peopleAvailable, scientist, quantity })}>Research</button>
      </div>
    )
  }
}

export default ResearchButton;
