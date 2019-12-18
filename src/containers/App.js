import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Random from 'lodash/random';
import {FriendType} from "../components/FriendType";
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
}
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      type: FriendType[3-1],
      picSet: 3
    };
  }
  
  //experimental. alternative is bind it in the constructor.
  randomize = (event) => {
    const set = Random(1, 5);
    this.setState({ picSet: set , type: FriendType[set-1]});
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { picSet, type } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    if(isPending) {
      return <h1 className="tc"> Loading... </h1>
    }
    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">{type}Friends</h1>
          <SearchBox
            searchChange={onSearchChange}
            randomize={this.randomize}
          />
          <Scroll>
            <ErrorBoundary robots={filteredRobots}>
              <CardList robots={filteredRobots} picSet={picSet} />
            </ErrorBoundary>
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);