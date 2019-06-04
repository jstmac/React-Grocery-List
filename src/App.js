import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import logo from './logo.svg';
import './App.css';
import { toUnicode } from 'punycode';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [
        {id: 1, name: "Eggs", complete: false, },
        {id: 2, name: "Bread", complete: false, },
        {id: 3, name: "Bacon", complete: false, },
        //new item...
      ]
    };

      this.addItem = this.addItem.bind(this);
  }
      getUniqId = () => {
          //NOTE We are just using this as a helper function for id's since we aren't using a db yet
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      }
      
      addItem = (name) => {
        const { items } = this.state;
        const item = { name, id: this.getUniqId() , complete: false }
        this.setState({ items: [item, ...items] });
      }
      
      handleClick = (id) => {
        const { items } = this.state;
        this.setState({
          items: items.map( item => {
            if (item.id === id) {
              return {
                ...item,
                complete: !item.complete
              }
            }
            return item
          })
        })
      }

  // renderItems = () => {
  //   //this.state.items
  //   const { items, } = this.state;
  //   return items.map( item =>
  //     <li key={item.id}>{item.name}</li>
  //   )
  // };

    render() {
      return (
        <div>
            <GroceryForm addItem={this.addItem} />
            <List name="Grocery List" items={this.state.items} itemClick={this.handleClick} /> 
        </div>
        
      )
    }
};    

  
    

  

  

export default App;
