FROM node:17-alpine

RUN npm install -g nodemon
# this will support volumes

WORKDIR /app
# following commands will run in /app


COPY package.json .
COPY package-lock.json .
# COPY package.json .


RUN npm install
# use RUN during build time

COPY . .
# copy all files

EXPOSE 4000

CMD ["npm", "run", "dev"]
# use CMD during run time


