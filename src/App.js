import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    state = {
      items: [
        {id: 1, name: "Eggs", complete: false, },
        {id: 2, name: "Bread", complete: false, },
        {id: 3, name: "Bacon", complete: false, },
    ]
  };

  renderItems = () => {
    //this.state.items
    const { items, } = this.state;
    return items.map( item =>
      <li key={item.id}>{item.name}</li>
    )
  };

    render() {
      const { items } = this.state;

      return (
        <div>
            <GroceryForm />
            <List name="Grocery List" items={items} /> 
        </div>
        
      );
    }
  }   

  
    

  

  

export default App;
