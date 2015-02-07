/* global Snap */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
    model: function(params, transition) {
        var universe = transition.state.params.universe.universe.replace(/-/g, ' '),
            name = params.map.replace(/-/g, ' ');

        return Ember.RSVP.hash({
            universe: this.store.find('universe', {
                name: universe
            }),
            map: this.store.find('map', params.id),
            places: this.store.find('place', {
                map_id: params.id,
                contains: 'PlaceTypes'
            }),
            events: this.store.find('event', {
                map_id: params.id,
                contains: 'Chapters'
            }),
            name: name
        }).then(function(hash) {
            var uniquePlaceTypeIds = [];
            hash.universe = hash.universe.content[0];
            hash.placeTypes = [];

            for (var i = 0; i < hash.places.content.length; i++) {
                var placeType = hash.places.content[i].get('place_type');

                if (placeType && $.inArray(placeType.get('id'), uniquePlaceTypeIds) === -1) {
                    hash.placeTypes.push(placeType);
                    uniquePlaceTypeIds.push(placeType.get('id'));
                }
            }

            return hash;
        });
    },
    actions: {
        zoom: function(/*type, value, time*/) {
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


            /*var scale = $('.map-overlay')[0].createSVGTransform(),
                transformList = $('.map-overlay')[0].transform.baseVal,
                scaleValue = transformList.getItem(0).matrix.a,
                imageHeight = '+=0',
                imageLeft = '+=0',
                imageTop = '+=0';
            if (!value) {
                if (type == 'in' || type == 'out' || type == 'reset') {
                    value = 0.1;
                } else {
                    value = 50;
                }
            }

            if (!time) {
                time = 500;
            }

            switch (type) {
                case 'left':
                    imageLeft = '-=' + value + 'px';
                    break;

                case 'right':
                    imageLeft = '+=' + value + 'px';
                    break;

                case 'up':
                    imageTop = '-=' + value + 'px';
                    break;

                case 'down':
                    imageTop = '+=' + value + 'px';
                    break;

                case 'in':
                    scaleValue = ($('.map-image').width() * (1 + value)) / $('.map-image').data('width');
                    imageWidth = '+=' + (value * 100) + '%';
                    break;

                case 'out':
                    scaleValue = ($('.map-image').width() * (1 - value)) / $('.map-image').data('width');
                    imageWidth = '-=' + (value * 100) + '%';
                    break;

                case 'reset':
                    scaleValue = $('.map-overlay').data('set-scale');
                    imageWidth = $('.map-image').data('set-width');
                    imageLeft = '0';
                    imageTop = '0';
                    break;
            }

            scale.setScale(scaleValue, scaleValue);
            transformList.replaceItem(scale, 0);
            //$('.map-overlay').attr('transform', 'scale(' + scaleValue + ')')



            $('.map-image').animate({
                width: imageWidth
            }, time);


            $('.map-drag').animate({
                top: imageTop,
                left: imageLeft
            }, time);*/
        }
    }
});
