# Meowji <img src="./src/assets/astroCat.svg" style="height: 1em; user-select: none; pointer-events: none; vertical-align: middle;" /> 

Non-standard cat emojis.

## Getting Started

Meowji can be added to your site by including `meowji.min.js`:

```
<script src="./PATH/TO/meowji.min.js"></script>
...
<script>
  window.onload = () => {
    meowji.convertNode(document.body);
  };
</script>
```

## Development

Build production bundle with:

```
yarn install
yarn build
```

## Licensing

Code is licensed under MIT. Cat SVGs are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).