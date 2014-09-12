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
            hash.media = _this.store.find('media', {
                universe_id: hash.universe.get('id')
            });
            return hash;
        });
    }
});
