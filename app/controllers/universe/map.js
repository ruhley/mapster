/* global Snap, Slider */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  mapPlacesSearch: '',
  afterRender: function() {
    var _this = this,
      image = $('.map-image'),
      svg = $('.map-overlay'),
      svgItems = svg.children(),
      s = new Snap('.map-overlay'),
      model = this.get('model');

    svg.width(image.width());
    svg.height(image.height());

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
      _this.hoverPlace($(this).attr('data-id'));
    }, function() {
      _this.unHoverPlace($(this).attr('data-id'));
    }).click(function() {
      _this.clickPlace($(this).attr('data-id'));
    });

    $('#map-places-list .place').hover(function() {
      _this.hoverPlace($(this).attr('data-id'));
    }, function() {
      _this.unHoverPlace($(this).attr('data-id'));
    }).click(function() {
      _this.clickPlace($(this).attr('data-id'));
    });

    $('#map-events-list .event').click(function() {
      _this.clickEvent($(this).attr('data-id'));
    });

    this.set('s', s);

    var ticks = [],
      ticks_labels = [];

    for (var i = 0; i < model.media.content.length; i++) {
      var tick_count = 0;
      for (var j = 0; j < model.chapters.length; j++) {
        if (model.chapters[j].get('media_id') === model.media.content[i].get('id')) {
          for (var k = 0; k < model.events.content.length; k++) {
            if (model.events.content[k].get('chapter_id') === model.chapters[j].get('id')) {
              tick_count++;
            }
          }
        }
      }

      if (tick_count > 0) {
        if (ticks.length === 0) {
          ticks.push(tick_count);
        } else {
          ticks.push(tick_count + ticks[ticks.length - 1]);
        }
        ticks_labels.push(model.media.content[i].get('name'));
      }
    }
console.log(ticks, ticks_labels);
    var slider = new Slider('#map-events-slider', {
      /*min: 0,
      max: 10,*/
      step: 1,
      value: 1,
      selection: 'before',
      natural_arrow_keys: true,
      ticks: ticks,
      ticks_labels: ticks_labels
    });

    this.set('slider', slider);
  },
  redraw: function() {
    $('.map-overlay').html($('.map-overlay').html());
    $('.map-overlay')[0].forceRedraw();
  },
  hoverPlace: function(id) {
    var place = new Snap('#map-place-' + id),
      list = $('#map-places-list-' + id);

    place.addClass('hover');
    list.addClass('hover');

    if (!this.get('selected')) {
      this.showPopover(id);
    }
  },
  unHoverPlace: function(id) {
    var place = new Snap('#map-place-' + id),
      list = $('#map-places-list-' + id);

    place.removeClass('hover');
    list.removeClass('hover');

    if (!this.get('selected')) {
      this.removePopover();
    }
  },
  clickPlace: function(id) {
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
  clickEvent: function(id) {
    console.log(id);
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
      if (parseInt(places.content[i].get('id')) === parseInt(id)) {
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
      bottom: ($('.map-wrapper').height() - bBox.y + 10) + 'px',
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
      _this.searchItem($(this).attr('data-id'), search);
    });
  }.observes('mapPlacesSearch')
});
