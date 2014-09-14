App.UniverseMediaRoute = Ember.Route.extend({
    model: function(params, transition) {
        console.log(arguments);
        var _this = this,
            universe = transition.state.params.universe.universe.replace(/-/g, ' '),
            name = params.media.replace(/-/g, ' ');

        return Em.RSVP.hash({
            universe: this.store.find('universe', {
                name: universe
            }),
            media: this.store.find('media', {
                name: name
            }),
            name: name
        }).then(function(hash) {
            hash.universe = hash.universe.content[0];
            hash.media = hash.media.content[0]
            return hash;
        });
    }
});
