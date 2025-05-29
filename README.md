# Bad Password API (Starter)

A simpler version of the [bad-password-api.vercel.app](https://bad-password-api.vercel.app/) that appears in Chapter 9 "Data Tracking" in <em>Critical Web Design</em> by xtine burrough and Owen Mundy (MIT Press, 2025).

## How does it work?

This project uses Node.js (backend) to returns data to the browser (frontend). 

- `public/index.html`: The frontend for the API, uses client side JS to make requests to the server.
- `index.js`: [Node.js](https://nodejs.org/en/about/) runs Javascript in the backend using the Express framework to start the server and import the `routes.js` file
- `routes.js` contains the endpoints that return new passwords
- `package.json`: The NPM packages for your project's dependencies

## Notes

- See [README.md](https://github.com/omundy/bad-password-api) in the original project



## Instructions

### Connect to API

See Chapter 9 of Critical Web Design

### Full-stack Instructions

1. Create a directory called `public` and move `index.html`, `main.js`, and `styles.css` into it