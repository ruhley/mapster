import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model: function(params) {
    var parentModel = this.modelFor('universe');

    return Ember.RSVP.hash({
      items: this.store.find(params.type, {universe_id: parentModel.universe.id}),
      type: Ember.String.capitalize(params.type),
      link: 'universe.' + params.type
    }).then(function(hash) {
      hash = $.extend(true, {}, parentModel, hash);
      return hash;
    });
  }
});
