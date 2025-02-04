#!/bin/bash
rm -fr dist
npm run download
npm run compile -- --platform obsidian --distDir dist/obsidian

cp themes.json dist/
cp highlights.json dist/

mkdir dist/themes
cp -r dist/obsidian/dark/* dist/themes/
cp -r dist/obsidian/light/* dist/themes/

cp src/themes/maple.css dist/themes/

cd dist/themes/
rename 's/obsidian-/mweb-/' *

cd ..
zip assets.zip themes.json highlights.json themes/* highlights/*

cd ..