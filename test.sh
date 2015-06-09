#!/bin/sh

curl -H "Content-Type: application/json" -X POST -d '{"total":10,"positive":6, "negative":3, "neutre":1}' http://localhost:3000/post
