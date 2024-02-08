## Docker info:
(Build image)
docker build -t my-image-name .


docker run -it ubuntu  (runs in interactive (shell) mode)

apt (this is the package manager for docker)
apt install nano
{doesnt exist? try:)
apt update
apt install nano
apt remove nano



docker image ls
docker ps     (shows all containers)
docker ps -a   (shows all stopped containers too)
docker container ls -q    (just returns container ids)

(creating container from command line with an image )
docker run —name my-new-container-name -p 4000:4000 existing-image-name (-d runs in detached mode)

(stopping docker container from other shell)
docker stop my-container-name

(running existing container (no ports etc needed)
docker run my-new-container-name

(deleting containers)
docker container rm my-container-name





docker container rm -f $(docker container ls -q)      (removes all containers)
docker container rm -f $(docker container ls -aq)      (removes all containers - even stopped ones)
docker images rm -f $(docker images ls -aq) 
you can also click on docker desktop bug icon (top right) and clear/purge data

(removing all stuff for a fresh start)
docker system prune -a


versioning:
docker build -t my-image:v1 .
docker run —name my-new-container -p 4000:4000 my-image:v1


(starting already build container in default detached mode)
docker start my-container-name

(deleting a container automatically when not being used)
docker run —name my-new-container -p 4000:4000 —rm my-image


(adding volumes)
docker run —name my-new-container -p 4000:4000 —rm -v my-image:v1

VOLUMES 
(volumes map files on host computer to an image. This is convenient for working on local files that change a lot and not needing to update the image for changes to reflect)

(starts container using local files volume)
docker run --name my-cont1 -p 4000:4000 --rm -v /Users/gdylanc/workspace/tutorials/docker-play/trivial-api:/app  myapp

(same but uses node_modules from container)
docker run --name my-cont1 -p 4000:4000 --rm -v /Users/gdylanc/workspace/tutorials/docker-play/trivial-api:/app -v /app/node_modules myapp


DOCKER COMPOSE
docker-compose up
docker-compose down 
docker-compose down —rmi all -v (removes images and volumes when it stops)

