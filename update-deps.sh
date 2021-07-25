#!/bin/sh
npx ncu -u -x jest,ts-jest
rm -rf ./package-lock.json ./node_modules && npm i
