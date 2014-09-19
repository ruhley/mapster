App.UniverseRoute = Ember.Route.extend({
    model: function(params, transition) {
        var _this = this,
            name = params.universe.replace(/-/g, ' ');

        return Em.RSVP.hash({
            universe: this.store.find('universe', {
                name: name
            }),
            name: name
        }).then(function(hash) {
            hash.universe = hash.universe.content[0];
            hash.maps = _this.store.find('map', {
                universe_id: hash.universe.get('id')
            });
            hash.media = _this.store.find('media', {
                universe_id: hash.universe.get('id')
            });
            hash.characters = _this.store.find('character', {
                universe_id: hash.universe.get('id')
            });
            return hash;
        });
    }
});
