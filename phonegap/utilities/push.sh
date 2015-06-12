#!/bin/bash
if [ -z "$1" ]
  then
    echo "Build platform argument required (e.g. android)"
    exit 1
fi
cd $( dirname "${BASH_SOURCE[0]}" )
cd "../build/platforms/$1/ant-build/"
adb install -r $( find . | grep apk | grep -v '\-unaligned')