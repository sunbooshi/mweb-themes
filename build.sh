#!/bin/bash
rm -fr dist

npm run compile -- --platform obsidian --distDir dist/obsidian

mkdir dist/themes
cp -r dist/obsidian/dark/* dist/themes/
cp -r dist/obsidian/light/* dist/themes/

cd dist/themes/
rename 's/obsidian-/mweb-/' *

cd ../..
tar -czf themes.tar.gz dist/themes