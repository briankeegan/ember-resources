import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editTitle () {
      return this.sendAction('editTitle', this.get('list'));
    }
  }
});
