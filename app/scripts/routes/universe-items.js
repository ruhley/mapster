App.UniverseItemsRoute = Ember.Route.extend({
    model: function(params, transition) {
        var _this = this,
            universe = transition.state.params.universe.universe.replace(/-/g, ' ');

        return Em.RSVP.hash({
            universe: this.store.find('universe', {
                name: universe
            }),
            items: this.store.find(params.type),
            type: Ember.String.capitalize(params.type),
            link: 'universe.' + params.type
        }).then(function(hash) {
            hash.universe = hash.universe.content[0];
            return hash;
        });
    }
});
