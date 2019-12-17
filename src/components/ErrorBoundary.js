import React, {Component} from 'react';
import notFoundPic from './notFound.jpg';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      notFound: false
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.props.robots.length === 0) {
      return (
        <div className="bg-light-green-gradient dib br3 pa3 ma2 grow bw2 shadow-5">
          <img src={notFoundPic} alt="not found pic" />
        </div>
      );
    }

    if (this.state.hasError) {
      return <h1> Ooops! Something went wrong </h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;