App.IndexRoute = Ember.Route.extend({
    model: function(params, transition) {
        return Em.RSVP.hash({
            universes: this.store.find('universe')
        });
    }
});
