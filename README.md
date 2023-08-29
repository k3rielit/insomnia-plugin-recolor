# Recolor

A simple Insomnia plugin to bring back the old colorful HTTP method indicators in the sidebar.

Uses a `MutationObserver` to look for bordered elements in the requests list, then modifies its class and style. As of now, it doesn't update the colors when a request's http method is changed. Removing the .body from the selector would solve it, but then Insomnia won't load, due to the constant DOM updates and the infinite qureySelectorAll calls. Changing the document.body for the sidebar in the observer won't fix it, and will create another problem (waiting for that node to be in the DOM).

## How to use

### Clone the repository

```ps
git clone https://github.com/k3rielit/insomnia-plugin-recolor.git`
cd insomnia-plugin-recolor
```

### Windows

Run `install.bat`, or manually copy the contents of `./src/` to `%appdata%/Insomnia/plugins/insomnia-plugin-recolor`

### npm

```ps
npm install copyfiles -g
npm run install
```

## Todo

- Replace MutationObserver with something else
