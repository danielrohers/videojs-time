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
videojs('my-video', {
  plugins: {
    time: {
      get : function (currentTime) {
        console.log('currentTime: ', currentTime);
      },
      send: window.location.href
    }
  }
});
```

## License

[Licence](https://github.com/danielrohers/videojs-time/blob/master/LICENSE) © Daniel Röhers Moura
