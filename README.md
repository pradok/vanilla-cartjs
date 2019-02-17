# Introduction

## Requirements
* [Node](https://nodejs.org/en/)

## Usage

Setup project ```npm install```

Run tests: ```npm test```

### Start the application

Run index.js: ```npm start```

That would launch an web application on port `8080` by default, if you're running into port conflict, just modify the port in `src/index.js` or stop the existing application one on `8080`.

After the launch, you could access the application via sending http requests to the following endpoint.

- GET `/products/` to fetch all the product code
- GET `/products/{code}` to get a particular product by its code
- POST `/checkout` with `product-code` in an array will invoke the actual checkout

```sh
$ curl -X POST http://localhost:8080/checkout -d"[\"CHAIR_RED\",\"DIS_10-CHAIR_BLUE\"]" -H "Content-Type: application/json"
```

would get something like:

```sh
{"totalPrice":47.480999999999995,"loyaltyPoints":7.496999999999999}
```

Note that the header `Contnet-Type: application/json` is required.