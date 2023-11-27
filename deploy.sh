echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* tim@137.184.43.82:/var/www/137.184.43.82/

echo "Done"