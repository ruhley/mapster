import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params, transition) {
        var universe = transition.state.params.universe.universe.replace(/-/g, ' '),
            name = params.media.replace(/-/g, ' ');

        return Ember.RSVP.hash({
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
