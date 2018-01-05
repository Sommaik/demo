if docker stop myapp
then
echo 'stop myapp'
docker rm myapp
else
echo 'myapp not run'
fi
docker build -t myapp .
docker run -d -p 9090:80 --name myapp myapp
