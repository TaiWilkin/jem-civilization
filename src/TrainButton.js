import React from 'react';

class TrainButton extends React.PureComponent {
  state = {
    jobType: "hunter",
    quantity: 1
  }

  render() {
    const { peopleAvailable, train, availableJobs, people, jobs } = this.props;
    const { quantity, jobType } = this.state;

    return (
      <div>
        <input type="number" onChange={({ target }) => this.setState({ quantity: target.value })} value={quantity} />
        <select onChange={({ target }) => this.setState({ jobType: target.value })} value={jobType}>
          {availableJobs.map((type, i) => <option value={type} key={i}>{type}</option>)}
        </select>
        <button onClick={() => train({ jobType, quantity, peopleAvailable, people, jobs })}>Train</button>
      </div>
    )
  }
}

export default TrainButton;
