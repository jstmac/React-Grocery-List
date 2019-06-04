import React from 'react';
import Item from './Item';

const List = (props)  => (
  <div>
      <h2>{props.name}</h2>
      <ul>
      { props.items.map( item => <Item key={item.id} {...item} itemClick={props.itemClick} /> )}
      {/* { items.map( item => <Item key={item.id} id={item.id} name={item.name} complete={item.complete} /> )}  */}
   </ul>
 </div>
)


// const List = (props) => (
//   <div>
//     <h2> {props.name}</h2>
//     <ul>
//       { props.items.map( item => <li key={item.id}>{item.name}</li>)}
//     </ul>
//   </div>
// );

export default List;