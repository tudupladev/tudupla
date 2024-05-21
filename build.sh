rm -rf node_modules
rm -rf build
rm yarn.lock
yarn install
yarn predeploy
yarn deploy
