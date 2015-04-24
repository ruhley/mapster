import Ember from "ember";

export default Ember.Component.extend({
  tagName: '',
  didInsertElement: function() {
    var place = this.get('place');
      //coords = place.get('coordinates');
console.log(place);
    this.set('class', place.get('place_type.name'));
    this.set('id', 'map-place-' + place.id);
    this.set('data_id', place.id);

    coords = coords.split(',');

    if (coords.length === 1) {
      coords = coords.join('').split(' ');
      this.set('cx', coords[0]);
      this.set('cy', coords[1]);
      this.set('r', 5);
      this.set('circle', true);
    } else {
      this.set('d', 'M ' + coords.join(' L ') + ' Z');
    }
  }
});
