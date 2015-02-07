import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('universe', {
        path: '/:id/:universe'
    }, function() {
        this.route('items', {
            path: '/:type'
        });

        this.route('map', {
            path: 'map/:id/:map'
        });

        this.route('media', {
            path: 'media/:id/:media'
        });

        this.route('character', {
            path: 'character/:id/:character'
        });

        this.route('chapter', {
            path: 'chapter/:id/:chapter'
        });
    });
});

Router.reopen({
    didTransition: function(infos) {
        this._super(infos);

        Ember.run.scheduleOnce('afterRender', this, function() {
            for (var i = 0; i < infos.length; i++) {
                if (Ember.$.isFunction(infos[i].handler.controller.afterRender)) {
                    console.info("Running afterRender for '" + infos[i].name + "'");
                    infos[i].handler.controller.afterRender();
                }
            }
        });
    }
});

export default Router;
