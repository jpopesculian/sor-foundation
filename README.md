# scenter.io

a hyper local social network

## Architecture Details

The application is a modern statically served [io.js](https://iojs.org/) webapp based upon the [Sails](http://sailsjs.org) framework written in ES6. Please review the Sails documentation for more information on the structure of the application. The frontend is implemented using [React](https://facebook.github.io/react/) and [Leaflet](http://leafletjs.com/) maps. The database is implemented using [MongoDB](https://www.mongodb.org/).

## Installation

To install and run a server on `localhost:1337`, enter:

```
npm install && npm start
```

for production mode use:

```
npm start --prod
```

_Note: the server may take up to 10 seconds to build all the files before serving_

## Static files

To build the static files to a `www` directory enter:

```
grunt build
```

## Phonegap

To build the phonegap application there are three utilities in `phonegap/utilities`

* `build.sh`: automated build of static files and phonegap app apk
* `push.sh`: pushes built apk to linked device through adb
* `install.sh`: builds and pushes apk
