import React from 'react';
import AddItem from './AddItem';
import List from './List';
import todoStore from '../stores/todoStore';
import todoActions from '../actions/todoActions';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = todoStore.getState();
  }
  componentDidMount(){
    todoStore.listen((state) => this.setState(state));
  }
  componentWillUnmount(){
    todoStore.unlisten((state) => this.setState(state));
  }
  addItem(newItem){
    todoActions.addItem(newItem);
  }
  removeItem(index){
    todoActions.removeItem(index);
  }
  render(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.addItem}/>
          <List items={this.state._store.list} remove={this.removeItem}/>
        </div>
      </div>
    )
  }
}

export default ListContainer;
