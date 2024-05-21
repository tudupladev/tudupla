#!/bin/bash

# Check if the first parameter is empty
if [ -z "$1" ]; then
    echo "Error: Send the commit message version. Exiting."
    exit 1
fi

cd ..
cd tudupla.io

echo "Removing old files.."
find . -mindepth 1 -maxdepth 1 ! -name ".git" ! -name "CNAME" -exec rm -rf {} \;
cd ..

echo "Copying files.."
find tuduplaweb/build  -mindepth 1 -maxdepth 1 ! -name ".git" -exec cp -r {} tudupla.io/ \;
cd tudupla.io

echo "$1"
git add .
git commit -m "Version $1"
git push origin main
