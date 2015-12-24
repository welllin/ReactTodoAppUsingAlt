import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
