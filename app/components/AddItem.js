import React from 'react';
import ReactDOM from 'react-dom';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    if(e.keyCode === 13){
      let newItem = this.refs.newItem.getDOMNode().value;
      this.refs.newItem.getDOMNode().value = '';
      this.props.add(newItem);
    }
  }
  render(){
    return (
      <div>
        <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit}  />
      </div>
    )
  }
}

export default AddItem;
