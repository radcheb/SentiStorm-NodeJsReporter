# SentiStorm-NodeJsReporter

A simple  NodeJS + Sockets.io application that serve as an endpoint for a tweets sentiments analysis platforme.

You need to have nodeJs and bower installed or you can use the Docker image.

# Usage

## From source
To run the server install bower components by
> bower install
Then install nodeJs dependencies
> npm install
Then run it
> node src/index.js

To see magic happens open you browser at http://localhost:3000/   then run test.sh several times.

## From Docker image
Build the docker image
> ./build.sh
Start the docker container
> ./start.sh

This will launch the server at the port 3000

For testing you can run the "test.sh" which send a post to the application with curl.