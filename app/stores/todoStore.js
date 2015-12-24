import alt from '../libs/alt';
import todoActions from '../actions/todoActions';

class todoStore {
  constructor(){
    this.bindActions(todoActions);

    this._store = {
      list: []
    }
  }
  addItem(item){
    const _store = this._store;

    this.setState({
      _store: {
        list: _store.list.concat(item)
      }
    });
  }
  removeItem(index){
    const _store = this._store;
    this.setState({
      _store: {
        list: [
          ..._store.list.slice(0, index),
          ..._store.list.slice(index + 1)
        ]
      }
    });
  }
}

export default alt.createStore(todoStore, 'todoStore');
