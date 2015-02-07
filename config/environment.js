/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mapster',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        'ember-htmlbars-component-helper': true
      }
    },

    APP: {
      api: 'http://localhost/mapster-api'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://localhost/",
      'font-src': "'self' http://localhost/",
      'connect-src': "'self' http://localhost/",
      'img-src': "'self' http://localhost/",
      'style-src': "'self' http://localhost/",
      'media-src': "'self' http://localhost/"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
