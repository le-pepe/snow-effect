[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# snow-effect

A web component built with StencilJS that generates falling snowflakes, providing an easy-to-use snow effect for any website.

## Demo
[✨Simple demo here](https://snoweffect.xyz/demo)

## Usage

You can use the `snow-effect` custom element in your HTML. It allows customization of the quantity of snowflakes, color, and speed.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Snow Effect Demo</title>
    <script type="module" src="https://unpkg.com/snow-effect"></script>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #282c34;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }

      form {
        margin-bottom: 20px;
      }

      label {
        margin-right: 10px;
      }

      button {
        padding: 10px 15px;
        background-color: #61dafb;
        color: #282c34;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover {
        background-color: #21a1f1;
      }
    </style>
  </head>
  <body>
    <h1>Snow Effect Custom Element Demo</h1>

    <form id="controls">
      <div>
        <label for="flakes">Flakes quantity:</label>
        <input type="number" id="flakes" name="flakes" min="1" max="500" value="100" />
      </div>
      <div>
        <label for="color">Flakes color:</label>
        <input type="color" id="color" name="color" value="#ffffff" />
      </div>
      <div>
        <label for="speed">Flakes speed:</label>
        <input type="range" id="speed" name="speed" min="1" max="10" value="5" />
      </div>
      <button type="button" id="apply">Apply Changes</button>
    </form>

    <!-- Snow Effect custom element -->
    <snow-effect id="snow-component" flakes="100" color="#ffffff" speed="5"></snow-effect>

    <script>
      document.getElementById('apply').addEventListener('click', () => {
        const flakes = document.getElementById('flakes').value;
        const color = document.getElementById('color').value;
        const speed = document.getElementById('speed').value;

        const snowComponent = document.getElementById('snow-component');
        snowComponent.setAttribute('flakes', flakes);
        snowComponent.setAttribute('color', color);
        snowComponent.setAttribute('speed', speed);
      });
    </script>
  </body>
</html>
```

### Attributes

- `flakes`: Number of snowflakes (default: `100`)
- `color`: Color of the snowflakes (default: `#ffffff`)
- `speed`: Speed of falling snowflakes, with values from `1` (slow) to `10` (fast) (default: `1`)

## Development

To build the project locally:

```bash
npm install
npm start
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## TODO

- [ ] Get a logo
- [ ] Support for node module
- [ ] Add frameworks wrapper (React, Angular, Vue)


<!-- Placeholder for logo until it is created -->
[npm-version-src]: https://img.shields.io/npm/v/snow-effect/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/snow-effect

[npm-downloads-src]: https://img.shields.io/npm/dm/snow-effect.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/snow-effect

[license-src]: https://img.shields.io/npm/l/snow-effect.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/snow-effect