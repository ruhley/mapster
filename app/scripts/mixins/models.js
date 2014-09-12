App.ModelMixin = Ember.Mixin.create({
    url: function() {
        return Ember.String.dasherize(this.get('name'));
    }.property('name'),
    imageDisplay: function() {
        var image = this.get('image');

        if (image) {
            return '<div class="media"><img src="' + image + '" alt="" class="media-object"/></div>';
        }

        return '<div class="fa-stack fa-5x" title="No image available"><i class="fa fa-picture-o fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x text-danger"></i></div>';
    }.property('image'),
    linkTo: function() {
        var link = this.get('link');

        if (link) {
            return '<a href="' + link + '" target="_blank">' + link + '</a>';
        }

        return '<span class="fa-stack fa-lg" title="No link available"><i class="fa fa-link fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x text-danger"></i></span>';
    }.property('link')
});
