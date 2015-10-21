#!/bin/sh

IMAGE_NAME=nodejs_reporter
CONATAINER_NAME=nodejs_reporter_instance

#Launch server
docker run --name=$CONTAINER_NAME -d -p 3000:3000 $IMAGE_NAME
