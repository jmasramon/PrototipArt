#!/bin/bash

echo "Building JogWithFriends"

cp -vr resources servidor/public
cp -vr app servidor/public
cp -v app.html servidor/public
cp -v app.js servidor/public

echo "Done!"