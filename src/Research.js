import React from 'react';
import { connect } from 'react-redux';
import { researchSomething } from './ResearchCategories/actions';

class Research extends React.PureComponent {
  state = {
    category: 'weapons'
  }

  render() {
    const { researchCategories, research, researchSomething } = this.props;
    const categories = Object.keys(researchCategories);
    const { category } = this.state;
    return (
      <div className="research">
        <p>Research Options, and Cost in Research Points</p>
        <select onChange={({ target }) => this.setState({ category: target.value })}>
          {categories.map((RC, i) => <option key={i} value={RC}>{RC}: {researchCategories[RC].cost}</option>)}
        </select>
        <button onClick={() => researchSomething({ research, category, researchCategories })}>Spend Research Points</button>
      </div>
  );
  }
}

const mapStateToProps = ({ researchCategories, game }) => {
  return {
    researchCategories,
    research: game.research
  };
}

export default connect(mapStateToProps, { researchSomething })(Research);
