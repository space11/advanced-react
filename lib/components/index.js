import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { answer: 4333 };
  asyncFunc = () => Promise.resolve(34);

  async componentDidMount() {
    this.setState({ answer: await this.asyncFunc() });
  }

  render() {
    return (<h2>Hello class component-- {this.state.answer}</h2>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
