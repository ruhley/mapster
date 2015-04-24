/* global Snap, mina */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model: function(params) {
    var parentModel = this.modelFor('universe'),
      name = params.map.replace(/-/g, ' ');

    return Ember.RSVP.hash({
      map: this.store.find('map', params.id),
      places: this.store.find('place', {
        map_id: params.id,
        contains: 'PlaceTypes'
      }),
      events: this.store.find('event', {
        map_id: params.id,
        contains: 'Chapters'
      }),
      media: this.store.find('media', {
        universe_id: parentModel.universe.id
      }),
      name: name
    }).then(function(hash) {
      var uniquePlaceTypeIds = [],
        uniqueChapterIds = [],
        i;

      hash = $.extend(true, {}, parentModel, hash);

      hash.placeTypes = [];

      for (i = 0; i < hash.places.content.length; i++) {
        var placeType = hash.places.content[i].get('place_type');

        if (placeType && $.inArray(placeType.get('id'), uniquePlaceTypeIds) === -1) {
          hash.placeTypes.push(placeType);
          uniquePlaceTypeIds.push(placeType.get('id'));
        }
      }

      hash.chapters = [];

      for (i = 0; i < hash.events.content.length; i++) {
        var chapterId = hash.events.content[i].get('chapter_id');

        if (chapterId && $.inArray(chapterId, uniqueChapterIds) === -1) {
          hash.chapters.push(hash.events.content[i].get('chapter'));
          uniqueChapterIds.push(chapterId);
        }
      }

      return hash;
    });
  },
  actions: {
    zoom: function() {
      var _this = this,
        s = new Snap('.map-overlay'),
        matrix = new Snap.Matrix();

      matrix.scale(1.2);

      s.animate({
        transform: matrix
      }, 3000, mina.bounce, function() {
        console.log(arguments);
        _this.controller.redraw();
      });
    }
  }
});
