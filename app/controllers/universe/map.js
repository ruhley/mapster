/* global Snap */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    mapPlacesSearch: '',
    afterRender: function() {
        var _this = this,
            image = $('.map-image'),
            svg = $('.map-overlay'),
            svgItems = svg.children(),
            s = new Snap('.map-overlay');

        svg.width(image.width());
        svg.height(image.height());
        //svg[0].setAttribute('viewBox', '0 0 ' + image.width() + ' ' + image.height());

        image.data('width', image.width());
        image.data('height', image.height());

        //hack to redraw the svg elements as ember doesn't like svg yet
        this.redraw();
        svgItems = svg.children();

        $('.map-wrapper').mousemove(function(evt) {
            var dragging = _this.get('dragging'),
                selected = _this.get('selected');

            if (dragging) {
                $('.map-drag').offset({
                    left: evt.clientX - dragging[0],
                    top: evt.clientY - dragging[1]
                });

                if (selected) {
                    var offset = $('.map-drag').offset(),
                        bBox = selected.getBBox();

                    $('.popover').css({
                        top: 'auto',
                        bottom: (($('.map-wrapper').height() - bBox.cy + 10) - offset.top) + 'px',
                        left: ((bBox.cx - ($('.popover').width() / 2)) + offset.left) + 'px'
                    });
                }
            }
        });

        $('.map-drag').mousedown(function(evt) {
            _this.set('dragging', [evt.offsetX, evt.offsetY]);
        }).dblclick(function() {
            _this.send('zoom', 'in');
        });

        $(document).mouseup(function() {
            _this.set('dragging', false);
        });

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
    redraw: function() {
        $('.map-overlay').html($('.map-overlay').html());
        $('.map-overlay')[0].forceRedraw();
    },
    hoverItem: function(id) {
        var place = new Snap('#map-place-' + id),
            list = $('#map-places-list-' + id);

        place.addClass('hover');
        list.addClass('hover');

        if (!this.get('selected')) {
            this.showPopover(id);
        }
    },
    unHoverItem: function(id) {
        var place = new Snap('#map-place-' + id),
            list = $('#map-places-list-' + id);

        place.removeClass('hover');
        list.removeClass('hover');

        if (!this.get('selected')) {
            this.removePopover();
        }
    },
    clickItem: function(id) {
        var place = new Snap('#map-place-' + id),
            list = $('#map-places-list-' + id),
            currentlyActive = place.hasClass('active');

        new Snap('.map-overlay').selectAll('.place').forEach(function(el) {
            el.removeClass('active');
        });

        if (!currentlyActive) {
            place.addClass('active');
        }

        $('#map-places-list .place').removeClass('active');

        if (!currentlyActive) {
            list.addClass('active');
        }

        this.showPopover(id);

        this.set('selected', currentlyActive ? false : place);
    },
    searchItem: function(id, search) {
        var place = new Snap('#map-place-' + id),
            list = $('#map-places-list-' + id),
            matches = search = '' || list.text().toLowerCase().indexOf(search) !== -1;

        if (matches) {
            place.addClass('search-match');
            place.removeClass('search-no-match');
            list.addClass('search-match');
            list.removeClass('search-no-match');
        } else {
            place.removeClass('search-match');
            place.addClass('search-no-match');
            list.removeClass('search-match');
            list.addClass('search-no-match');
        }
    },
    getPlace: function(id) {
        var places = this.get('model.places');

        for (var i = 0; i < places.content.length; i++) {
            if (places.content[i].get('id') === id) {
                return places.content[i];
            }
        }

        return null;
    },
    showPopover: function(id) {
        var place = new Snap('#map-place-' + id),
            bBox = place.getBBox(),
            item = this.getPlace(id),
            popover = $('<div>').addClass('popover fade top in popover-place').attr('role', 'tooltip')
            .append(
                $('<div>').addClass('arrow')
            ).append(
                $('<div>').addClass('popover-title').text(item.get('name'))
            ).append(
                $('<div>').addClass('popover-content').text(item.get('description'))
            );

        this.removePopover();

        popover.appendTo($('.map-wrapper')).show();

        popover.css({
            top: 'auto',
            bottom: ($('.map-wrapper').height() - bBox.cy + 10) + 'px',
            left: (bBox.cx - (popover.width() / 2)) + 'px'
        });
    },
    removePopover: function() {
        $('.popover-place').remove();
    },
    mapPlacesSearchChanged: function() {
        var _this = this,
            search = this.get('mapPlacesSearch').toLowerCase();

        $('.map-places-items li').each(function() {
            _this.searchItem($(this).data('id'), search);
        });
    }.observes('mapPlacesSearch')
});
