/*! videojs-time - v1.0.0 - 2016-4-2
 * Copyright (c) 2016 Daniel Röhers Moura
 * Licensed under the MIT license. */
(function(window, videojs) {

  'use strict';

  var _cb = null;
  var _send = null;

  var _defaults = {
    get: null,
    send: _send
  };

  function _xhr(type, url, success, error, data) {
    success = success || function () {};
    error = error || function () {};

    var xhr = new XMLHttpRequest();

    xhr.open(type, url, true);
    xhr.responseType = 'text';

    xhr.onload = function() {
      if ( xhr.status >= 200 && xhr.status <= 226) {
        if (xhr.responseText) return success(JSON.parse(xhr.responseText));
        return success();
      }
      error(xhr);
    };

    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.send(JSON.stringify(data));
  }

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  var time = function(options) {
    var settings = videojs.mergeOptions(_defaults, options);
    var player = this;

    if (settings.get) _cb = settings.get;
    if (settings.send) _send = settings.send;

    var _done = function () {
      if (_send) _xhr('POST', _send);
      if (_cb) _cb(player.currentTime());
    }

    player.on('pause', _done);
    window.onbeforeunload = _done;
  };

  time.on = function (event, cb) {
    switch (event) {
      case 'get':
        _cb = cb;
        break;
      case 'send':
        _send = cb;
        break;
      default:
        console.error('Event not defined.');
    }
  }

  // register the plugin
  videojs.plugin('time', time);

})(window, window.videojs);
