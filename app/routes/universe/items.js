import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params, transition) {
        var universe = transition.state.params.universe.universe.replace(/-/g, ' ');

        return Ember.RSVP.hash({
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
