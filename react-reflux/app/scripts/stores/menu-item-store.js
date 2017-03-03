import Reflux from 'reflux';
import MenuItemActions from '../actions/menu-item-actions';

let MenuItemStore = Reflux.createStore({
  listenables: MenuItemActions,
  
  init() {
    this.items = [];
  },

  loadItems() {
    this.trigger({ 
      loading: true
    });
  },

  loadItemsCompleted(items) {
    this.items = items;

    this.trigger({ 
      items : this.items,
      loading: false
    });
  },

  loadItemsFailed(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  }

});

export default MenuItemStore;