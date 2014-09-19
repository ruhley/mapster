App.UniverseMapRoute = Ember.Route.extend({
    model: function(params, transition) {
        var _this = this,
            universe = transition.state.params.universe.universe.replace(/-/g, ' '),
            name = params.map.replace(/-/g, ' ');

        return Em.RSVP.hash({
            universe: this.store.find('universe', {
                name: universe
            }),
            map: this.store.find('map', params.id),
            places: this.store.find('place', {
                map_id: params.id,
                contains: 'PlaceTypes'
            }),
            name: name
        }).then(function(hash) {
            hash.universe = hash.universe.content[0];
            return hash;
        });
    },
    actions: {
        zoom: function(type, value, time) {
            var scale = $('.map-overlay')[0].createSVGTransform(),
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
            }, time);
        }
    }
});
