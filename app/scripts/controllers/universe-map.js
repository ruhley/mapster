App.UniverseMapController = Ember.Controller.extend({
    afterRender: function() {
        var _this = this,
            image = $('.map-image'),
            svg = $('.map-overlay'),
            svgItems = svg.children(),
            selected = false,
            dragging = false,
            s = Snap('.map-overlay');

        svg.width(image.width());
        svg.height(image.height());

        image.data('width', image.width());
        image.data('height', image.height());

        //hack to redraw the svg elements as ember doesn't like svg yet
        svg.html(svg.html());
        svgItems = svg.children();

        $('.map-wrapper').mousemove(function(evt) {
            if (dragging) {
                $('.map-drag').offset({
                    left: evt.clientX - dragging[0],
                    top: evt.clientY - dragging[1]
                });
            }
        })

        $('.map-drag').mousedown(function(evt) {
            dragging = [evt.offsetX, evt.offsetY];
        }).dblclick(function() {
            _this.send('zoom', 'in');
        });

        $(document).mouseup(function() {
            dragging = false;
        });

        /*svgItems.each(function() {
            var el = $(this),
                place = _this.getPlace(el.data('id'));

            el.popover({
                html: true,
                placement: 'top',
                title: place.get('name'),
                content: place.get('description'),
                container: '.map-drag'
            });

            el.on('show.bs.popover', function() {
                console.log(arguments);
                $('.map-drag .popover').fadeOut(100).remove();
            });
        });*/

        svgItems.hover(function() {
            _this.hoverItem($(this).data('id'));
        }, function() {
            _this.unHoverItem($(this).data('id'));
        }).click(function() {
            _this.clickItem($(this).data('id'));
        });

        $('#map-places-list .place').hover(function() {
            _this.hoverItem($(this).data('id'));
        }, function() {
            _this.unHoverItem($(this).data('id'));
        }).click(function() {
            _this.clickItem($(this).data('id'));
        });

        this.set('s', s);

    },
    hoverItem: function(id) {
        var place = Snap('#map-place-' + id),
            list = $('#map-places-list-' + id);

        place.addClass('hover');
        list.addClass('hover');
    },
    unHoverItem: function(id) {
        var place = Snap('#map-place-' + id),
            list = $('#map-places-list-' + id);

        place.removeClass('hover');
        list.removeClass('hover');
    },
    clickItem: function(id) {
        var place = Snap('#map-place-' + id),
            list = $('#map-places-list-' + id),
            currentlyActive = place.hasClass('active')

        Snap('.map-overlay').selectAll('.place').forEach(function(el) {
            el.removeClass('active');
        });

        if (!currentlyActive) {
            place.addClass('active');
        }

        $('#map-places-list .place').removeClass('active');
        list.toggleClass('active');
    },
    getPlace: function(id) {
        var places = this.get('model.places');

        for (var i = 0; i < places.content.length; i++) {
            if (places.content[i].get('id') == id) {
                return places.content[i];
            }
        }

        return null;
    }
    /*,
    displayPlaceInfo: function(id) {
        var places = this.get('model.places');

        for (var i = 0; i < places.content.length; i++) {
            if (places.content[i].get('id') == id) {
                var html = [];

                html.push('<h3>');
                html.push(places.content[i].get('name'));

                if (places.content[i].get('image')) {
                    html.push('<img src="');
                    html.push(places.content[i].get('image'));
                    html.push('" alt="" class="thumb pull-right">');
                }

                html.push('</h3>');

                if (places.content[i].get('description')) {
                    html.push('<p>');
                    html.push(places.content[i].get('description'));
                    html.push('</p>');
                }

                if (places.content[i].get('link')) {
                    html.push('<p>For more information visit <a href="');
                    html.push(places.content[i].get('link'));
                    html.push('" target="_blank">');
                    html.push(places.content[i].get('link'));
                    html.push('</a></p>');
                }

                this.displayInfo(html.join(''));
                break;
            }
        }
    },
    displayInfo: function(html) {
        $('#map-info').html(html);
    }*/
});
