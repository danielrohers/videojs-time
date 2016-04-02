# videojs-time

Get the time watched video

## Installation
[Node.js](https://nodejs.org)
```bash
[sudo] npm install
```

## Starting

Compile files
```bash
gulp dist
```

Watch files
```bash
gulp watch
```

View example
```bash
npm start
```

## Using
```js
var get = function (currentTime) {
  console.log('currentTime: ', currentTime);
};
var send = window.location.href;

// call time in de the declaration
var player = videojs('my-video', {
  plugins: {
    time: {
      get: get,
      send: send
    }
  }
})

// or use events
player.time.on('get', get);
player.time.on('send', send)
```

## License

[Licence](https://github.com/danielrohers/videojs-time/blob/master/LICENSE) © Daniel Röhers Moura
