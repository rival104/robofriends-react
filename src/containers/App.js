import React, { Fragment, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Random from 'lodash/random';
import {FriendType} from "../components/FriendType";
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      robots: [],
      searchfield: "",
      type: FriendType[3-1],
      picSet: 3
    };
  }
  //experimental. alternative is bind it in the constructor.
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  randomize = (event) => {
    const set = Random(1, 5);
    this.setState({ picSet: set , type: FriendType[set-1]});
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
    ;
    // this.setState({robots: robots});
  }

  render() {
    const { searchfield, robots, picSet, type } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    if(!robots.length) {
      return <h1 className="tc"> Loading... </h1>
    }
    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">{type}Friends</h1>
          <SearchBox
            searchChange={this.onSearchChange}
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

export default App;