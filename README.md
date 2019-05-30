# Preliminary test frontend at SHOPEE
Demo: https://shopee-currency.herokuapp.com/

## Overview
Simple app that calculates a converted foreign exchange currency using the Foreign Exchange Rates API
https://exchangeratesapi.io/.

### Tech

* ReactJS
* NodeJS
* ExpressJS
* Node Sass

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/zizc0de/currency-app.git
$ cd currency-app
$ npm install
```
### Running
for development environtment

```sh
$ npm run dev
```
for production environtment

```sh
$ npm run build
$ npm start
```
#### Building for source
For production release:

```sh
$ npm run build
copy all files in dist folder to your root directory application
```
#### Unit Test

```sh
$ npm test
```

### Docker
currency-app is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd currency-app
docker images build . -t currency-app
```
This will create the app image and pull in the necessary dependencies. than create a network to create a static ip
```sh
docker network create --subnet=172.18.0.0/16 shopee-net
```

Once done, run the Docker image and map the port to whatever you wish on your network

```sh
docker run --net shopee-net --ip 172.18.0.22 -d currency-app
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
172.18.0.22:7000
```

Manage your docker running app
```sh
docker ps (list of running app)
docker stop <container_id> (to stop a container process)
docker start <container_id> (to start a container app)
docker kill <container_id> (to kill a container app)
```

License
----

MIT