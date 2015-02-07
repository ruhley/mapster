import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizePayload: function(payload) {
        var pay = {};

        if (payload.model) {
          pay[payload.model] = payload.data ? payload.data : payload;
        } else {
          pay = payload.data ? payload.data : payload;
        }

        return pay;
    }
});