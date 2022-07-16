# How to retrive token:

Paste this code into discord web or desktop version in Inspect Element Console, (Ctrl + Shift + I)

Code provided by https://www.npmjs.com/package/discord.js-selfbot-v13

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

# Adding your token to the selfbot:

add your token on this line in index.js:

```js
Line 10: let tkn = 'TOKEN HERE'
```

## Todo:

    ```css
    [+] Implement and test algorithms to predict the random numbers
    [+] Z3 Testing and implementation
    ```
