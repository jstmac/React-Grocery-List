import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Eggs", complete: false, },
      {id: 2, name: "Bread", complete: false, },
      {id: 3, name: "Bacon", complete: false,},
    ]
  };

  renderItems = () => {
    const { items, } = this.state;
    return items.map( todo =>
      <li key={item.id}>{item.name}</li>
    )
  };

    render() {
      return (
        <div>
          <ul>
            { this.renderItems() }
          </ul>
        </div>
      )
    }
  }   



export default App;
