import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(params) {
  var lvalue = params[0],
    operator = params[1],
    rvalue = params[2],
    operators = {
    '==': function(l, r) {
      //jshint eqeqeq:false
      return l == r;
    },
    '===': function(l, r) {
      return l === r;
    },
    '!=': function(l, r) {
      //jshint eqeqeq:false
      return l != r;
    },
    '!==': function(l, r) {
      return l !== r;
    },
    '<': function(l, r) {
      return l < r;
    },
    '>': function(l, r) {
      return l > r;
    },
    '<=': function(l, r) {
      return l <= r;
    },
    '>=': function(l, r) {
      return l >= r;
    },
    'typeof': function(l, r) {
      //jshint eqeqeq:false
      return typeof l == r;
    }
  };

  if (!operators[operator]) {
    throw new Error("Handlebars Helper 'compare' doesn't know the operator " + operator);
  }

  return operators[operator](lvalue, rvalue);
});
