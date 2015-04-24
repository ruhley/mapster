import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      universe: this.store.find('universe', params.id),
      maps: this.store.find('map', {
        universe_id: params.id,
        limit: 4
      }),
      media: this.store.find('media', {
        universe_id: params.id,
        limit: 4
      }),
      characters: this.store.find('character', {
        universe_id: params.id,
        limit: 4
      })
    });
  }
});
