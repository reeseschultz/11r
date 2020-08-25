#!/usr/bin/env sh

set -e

if [ -d "dist" ]; then rm -Rf dist; fi

npm run build

cd dist

echo "reeseschultz.github.io" > CNAME

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:reeseschultz/11r.git master:gh-pages

cd -
