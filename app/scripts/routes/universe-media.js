App.UniverseMediaRoute = Ember.Route.extend({
    model: function(params, transition) {
        var _this = this,
            universe = transition.state.params.universe.universe.replace(/-/g, ' '),
            name = params.media.replace(/-/g, ' ');

        return Em.RSVP.hash({
            universe: this.store.find('universe', {
                name: universe
            }),
            media: this.store.find('media', params.id),
            chapters: this.store.find('chapter', {
                media_id: params.id
            }),
            name: name
        }).then(function(hash) {
            hash.universe = hash.universe.content[0];
            return hash;
        });
    }
});
