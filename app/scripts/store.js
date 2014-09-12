DS.RESTAdapter.reopen({
    host: App.api.url,
    headers: {
        'Accept': 'application/json'
    },
    pathForType: function(type) {
        var camelized = Ember.String.camelize(type);
        return Ember.String.underscore(Ember.String.pluralize(camelized));
    },
    createRecord: function(store, type, record) {
        var data = {};
        var serializer = store.serializerFor(type.typeKey);
        serializer.serializeIntoHash(data, type, record, {
            includeId: true
        });

        return this.ajax(this.buildURL(type.typeKey), "POST", {
            data: data[type.typeKey]
        });
    },
    buildURL: function(record, suffix) {
        return this._super(record, suffix) + ".json";
    }
});

DS.RESTSerializer.reopen({
    extractSingle: function(store, primaryType, rawPayload, recordId) {
        var payload = this.normalizePayload(rawPayload, primaryType);
        var primaryTypeName = primaryType.typeKey;
        var primaryRecord;

        for (var prop in payload) {
            var typeName = this.typeForRoot(prop);
            var type = store.modelFor(typeName);
            var isPrimary = type.typeKey === primaryTypeName;
            var value = payload[prop];

            // legacy support for singular resources
            if (isPrimary && Ember.typeOf(value) !== "array") {
                primaryRecord = this.normalize(primaryType, value, prop);
                continue;
            }

            /*jshint loopfunc:true*/
            Ember.ArrayPolyfills.forEach.call(value, function(hash) {
                var typeName = this.typeForRoot(prop);
                var type = store.modelFor(typeName);
                var typeSerializer = store.serializerFor(type);

                hash = typeSerializer.normalize(type, hash, prop);

                var isFirstCreatedRecord = isPrimary && !recordId && !primaryRecord;
                var isUpdatedRecord = isPrimary && coerceId(hash.id) === recordId;

                // find the primary record.
                //
                // It's either:
                // * the record with the same ID as the original request
                // * in the case of a newly created record that didn't have an ID, the first
                //   record in the Array
                if (isFirstCreatedRecord || isUpdatedRecord) {
                    primaryRecord = hash;
                } else {
                    store.push(typeName, hash);
                }
            }, this);
        }

        return primaryRecord;
    },
    extractArray: function(store, primaryType, rawPayload) {
        var payload = this.normalizePayload(rawPayload, primaryType);
        var primaryTypeName = primaryType.typeKey;
        var primaryArray;

        for (var prop in payload) {
            var typeKey = prop;
            var forcedSecondary = false;

            if (prop.charAt(0) === '_') {
                forcedSecondary = true;
                typeKey = prop.substr(1);
            }

            var typeName = this.typeForRoot(typeKey);
            var type = store.modelFor(typeName);
            var typeSerializer = store.serializerFor(type);
            var isPrimary = (!forcedSecondary && (type.typeKey === primaryTypeName));

            /*jshint loopfunc:true*/
            var normalizedArray = Ember.ArrayPolyfills.map.call(payload[prop], function(hash) {
                return typeSerializer.normalize(type, hash, prop);
            }, this);

            if (isPrimary) {
                primaryArray = normalizedArray;
            } else {
                store.pushMany(typeName, normalizedArray);
            }
        }

        return primaryArray;
    },
    normalizePayload: function(payload, type) {
        var pay = {};

        if (payload.data) {
            pay[type.typeKey] = payload.data;
        } else {
            pay[type.typeKey] = payload;
        }

        return pay;
    }
});
