# Guess the Number Bruteforcer // Solver

## Information

if you decide to fork the repository for your own additions, please make sure to not commit and push your token, it WILL disable your  discord account until you reset your password from the email they send you.

## How to retrive token

Paste this code into discord web or desktop version in Inspect Element Console, (`Ctrl + Shift + I`)

Code provided by <a href="https://www.npmjs.com/package/discord.js-selfbot-v13">discord.js-selfbot-v13</a>

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

## Adding your token to the selfbot

add your token on this line in `config.json`

```json
{
    "token": ""
}
```

## Todo

```
[+] Implement and test algorithms to predict the random numbers
[+] Try to make rate limiting occuring as low as possible

[+] Z3 Testing and implementation
    [+] Z3 will be implemented in C++ instead of python because its really annoying installing
    [+] Hopefully i can be bothered to finish a build script to compile everything
[+] Check if Guess the Number has updated to fix my "bypasses" LOL! (Read below)
```

<a href="https://cdn.discordapp.com/attachments/957413132064653393/998233493798649926/unknown.png?size=4096">apparently im making a bypass by sending numbers??</a>

because github doesn't like big files, i'll attach a zip for the pdb files below (redirects to <a href="#">/BruhRain/GTNBruteforcer/#</a> for now):

<a href="#">libz3pdb.zip</a>