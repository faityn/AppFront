git pull
npm install -f
npm run build
pm2 delete AppFront
pm2 start npm --name AppFront -- start
