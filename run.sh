#!/bin/sh

node app/index.js "$@" || echo "run error code: $?"
