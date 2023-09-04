installation

```
<!-- docker is required -->
sudo apt install nginx
pip3 install locust

cd app
npm i
```

building images

```bash
cd app
sudo docker build -t nodeapp .
cd..

cd nginx
sudo docker build -t nginxapp .
cd ..

```

running container

```bash
# testing one instance
# comment out the 3 out of 4 servers from the nginx/nginx.conf
sudo docker container run -p 8080:80 -d nginxapp

sudo docker container run -p 1111:8080 -d nodeapp

# shut downn all running instance of docker containers
sudo docker stop $(sudo docker ps -a -q)
```

```bash
# testing 4 instance
# uncomment all servers from nginx/nginx.conf
sudo docker container run -p 8080:80 -d nginxapp

sudo docker container run -p 1111:8080 -d nodeapp
sudo docker container run -p 2222:8080 -d nodeapp
sudo docker container run -p 3333:8080 -d nodeapp
sudo docker container run -p 4444:8080 -d nodeapp

# shut downn all running instance of docker containers
sudo docker stop $(sudo docker ps -a -q)

```

load test setup  
setup is present in locustfile.py

```bash
# run command from root dir
locust

```
