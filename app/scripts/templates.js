Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div>\n    <div id='page-wrapper' class='container'>\n        <div class='row'>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/item-display"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <h2 class='well'>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "item.abbreviation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h2>\n\n    <div class='row'>\n        <div class='col-md-6 col-sm-12'>\n            ");
  stack1 = helpers['if'].call(depth0, "item.description", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "item.link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div class='col-md-6 col-sm-12 image-detail'>\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.imageDisplay", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            (");
  stack1 = helpers._triageMustache.call(depth0, "item.abbreviation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "item.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <p>For more information visit - ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.linkTo", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    The universe with the name ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" could not be found.\n");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "system/nav", options) : helperMissing.call(depth0, "partial", "system/nav", options))));
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "item", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/item-list-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data},helper ? helper.call(depth0, "link", "item.urlId", "item.url", options) : helperMissing.call(depth0, "link-to", "link", "item.urlId", "item.url", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.imageDisplay", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            <p>");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "link", "item.url", options) : helperMissing.call(depth0, "link-to", "link", "item.url", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class='col-md-3 col-xs-6 entity'>\n    ");
  stack1 = helpers['if'].call(depth0, "item.urlId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/item-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers.each.call(depth0, "item", "in", "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "_view.contentIndex", "<", "limit", options) : helperMissing.call(depth0, "compare", "_view.contentIndex", "<", "limit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['item-list-item'] || (depth0 && depth0['item-list-item']),options={hash:{
    'item': ("item"),
    'link': ("link")
  },hashTypes:{'item': "ID",'link': "ID"},hashContexts:{'item': depth0,'link': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-list-item", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n    None found\n");
  }

  stack1 = helpers['if'].call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("ERROR!\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "system/nav", options) : helperMissing.call(depth0, "partial", "system/nav", options))));
  data.buffer.push("\n\n<h2 class='well'>\n    Welcome to Mapster<br>\n    <small>The map collaboration tool. Please select a universe.</small>\n</h2>\n\n<div class='row'>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['item-list'] || (depth0 && depth0['item-list']),options={hash:{
    'items': ("model.universes"),
    'link': ("universe"),
    'limit': (16)
  },hashTypes:{'items': "ID",'link': "STRING",'limit': "INTEGER"},hashContexts:{'items': depth0,'link': depth0,'limit': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-list", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("LOADING!\n");
  
});

Ember.TEMPLATES["system/nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Mapster <span class='label label-primary'>Beta</span>");
  }

  data.buffer.push("<nav class='navbar navbar-inverse navbar-fixed-top'>\n      <div class='container'>\n        <div class='navbar-header'>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <button data-target='#navbar-main' data-toggle='collapse' type='button' class='navbar-toggle'>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n          </button>\n        </div>\n    </div>\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["universe/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Maps");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Media");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Characters");
  }

  data.buffer.push(escapeExpression((helper = helpers['item-display'] || (depth0 && depth0['item-display']),options={hash:{
    'item': ("model.universe")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-display", options))));
  data.buffer.push("\n\n<div class='row'>\n    <h3>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "universe.items", "map", options) : helperMissing.call(depth0, "link-to", "universe.items", "map", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['item-list'] || (depth0 && depth0['item-list']),options={hash:{
    'items': ("model.maps"),
    'limit': (4),
    'link': ("universe.map")
  },hashTypes:{'items': "ID",'limit': "INTEGER",'link': "STRING"},hashContexts:{'items': depth0,'limit': depth0,'link': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-list", options))));
  data.buffer.push("\n</div>\n<div class='row'>\n    <h3>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "universe.items", "media", options) : helperMissing.call(depth0, "link-to", "universe.items", "media", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['item-list'] || (depth0 && depth0['item-list']),options={hash:{
    'items': ("model.media"),
    'limit': (4),
    'link': ("universe.media")
  },hashTypes:{'items': "ID",'limit': "INTEGER",'link': "STRING"},hashContexts:{'items': depth0,'limit': depth0,'link': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-list", options))));
  data.buffer.push("\n</div>\n<div class='row'>\n    <h3>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "universe.items", "character", options) : helperMissing.call(depth0, "link-to", "universe.items", "character", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['item-list'] || (depth0 && depth0['item-list']),options={hash:{
    'items': ("model.characters"),
    'limit': (4),
    'link': ("universe.character")
  },hashTypes:{'items': "ID",'limit': "INTEGER",'link': "STRING"},hashContexts:{'items': depth0,'limit': depth0,'link': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-list", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["universe/items"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "system/nav", options) : helperMissing.call(depth0, "partial", "system/nav", options))));
  data.buffer.push("\n\n<h2 class='well'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "model.universe.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "model.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</h2>\n\n<div class='row'>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['item-list'] || (depth0 && depth0['item-list']),options={hash:{
    'items': ("model.items"),
    'link': ("model.link"),
    'limit': (999)
  },hashTypes:{'items': "ID",'link': "ID",'limit': "INTEGER"},hashContexts:{'items': depth0,'link': depth0,'limit': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-list", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["universe/map-places"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <li id='map-places-list-");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "place.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("' class='list-group-item place' ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-id': ("place.id")
  },hashTypes:{'data-id': "ID"},hashContexts:{'data-id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "place.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                ");
  return buffer;
  }

  data.buffer.push("<div class='row'>\n    <div class='col-sm-12'>\n        <div class='col-md-6'>\n            <select id='map-places-filter' class='form-control'>\n                <option value='nation'>Nations</options>\n            </select>\n        </div>\n        <div class='col-md-6'>\n            <input type='text' id='map-places-search' class='form-control' placeholder='Filter the list'>\n        </div>\n    </div>\n</div>\n\n<div class='col-sm-12' id='map-places-list'>\n    <ul class='list-group'>\n        <li class='list-group-item'>\n            <a href='#map-places-nations' data-toggle='collapse'>Nations</a>\n            <ul id='map-places-nations' class='list-group collapse'>\n                ");
  stack1 = helpers.each.call(depth0, "place", "in", "model.places", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </li>\n    </ul>\n</div>\n\n<div class='clearfix'></div>\n");
  return buffer;
  
});

Ember.TEMPLATES["universe/map"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <h2 class='well'>");
  stack1 = helpers._triageMustache.call(depth0, "model.map.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n    ");
  stack1 = helpers['if'].call(depth0, "model.map.description", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "model.map.link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div class='row'>\n        <div class='col-md-8 col-sm-12'>\n            <div class='map-wrapper'>\n                ");
  stack1 = helpers['if'].call(depth0, "model.map.image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n\n        <div class='col-md-4 col-sm-12 aside-right'>\n            <ul class='nav nav-tabs' role='tablist'>\n                <li class='active'><a href='#map-places' role='tab' data-toggle='tab'>Places</a></li>\n            </ul>\n\n\n            <div class='tab-content'>\n                <div class='tab-pane active' id='map-places'>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "universe/map-places", options) : helperMissing.call(depth0, "partial", "universe/map-places", options))));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <p>");
  stack1 = helpers._triageMustache.call(depth0, "model.map.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <p>For more information visit - ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.map.linkTo", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div class='map-shadow'></div>\n                    <div class='map-container'>\n                        <div class='map-drag'>\n                            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("model.map.image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='map-image' />\n                            <svg class='map-overlay' transform='scale(1)'>\n                                ");
  stack1 = helpers.each.call(depth0, "place", "in", "model.places", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                <rect id='map-tooltip'>\n                                    <text>My Tooltip</text>\n                                </rect>\n                            </svg>\n                        </div>\n                    </div>\n                ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                    ");
  data.buffer.push(escapeExpression((helper = helpers.coords || (depth0 && depth0.coords),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "place", options) : helperMissing.call(depth0, "coords", "place", options))));
  data.buffer.push("\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n    model.map not found\n");
  }

  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "system/nav", options) : helperMissing.call(depth0, "partial", "system/nav", options))));
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "model.map", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["universe/media"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['item-display'] || (depth0 && depth0['item-display']),options={hash:{
    'item': ("model.media")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-display", options))));
  data.buffer.push("\n\n<div class='row'>\n    <h3>Chapters</h3>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['item-list'] || (depth0 && depth0['item-list']),options={hash:{
    'items': ("model.chapters"),
    'limit': (4),
    'link': ("universe.chapter")
  },hashTypes:{'items': "ID",'limit': "INTEGER",'link': "STRING"},hashContexts:{'items': depth0,'limit': depth0,'link': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "item-list", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});