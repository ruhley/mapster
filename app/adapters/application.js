import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
    host: config.APP.api,
    headers: {
        'Accept': 'application/json'
    },
    pathForType: function(type) {
        //var camelized = Ember.String.camelize(type);
        var camelized = Ember.String.underscore(type);
        return Ember.String.pluralize(camelized);
    }
});