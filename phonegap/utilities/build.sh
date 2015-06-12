#!/bin/bash
if [ -z "$1" ]
  then
    echo "Build platform argument required (e.g. android)"
    exit 1
fi
# cd $( dirname "${BASH_SOURCE[0]}"
cd `dirname $0`
cd ../../
grunt phonegap
cd phonegap/build/
phonegap build $1
