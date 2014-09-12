App.Router.map(function() {
    this.resource('universe', {
        path: '/:universe'
    }, function() {
        this.route('media', {
            path: 'media/:media'
        });
    });
});


App.Router.reopen({
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
