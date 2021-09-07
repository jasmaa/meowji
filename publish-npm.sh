yarn clean
yarn build
cp package.json ./dist
cp README.md ./dist
cp LICENSE ./dist
cp CHANGELOG ./dist
mv ./dist/meowji.min.js ./dist/index.js
cd ./dist && npm publish