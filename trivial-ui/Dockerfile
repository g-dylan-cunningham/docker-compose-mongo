FROM node:17-alpine

WORKDIR /app
# following commands will run in /app

COPY package.json .
COPY package-lock.json .
# COPY package.json .


RUN npm install
# use RUN during build time

COPY . .
# copy all files

EXPOSE 3000

CMD ["npm", "run", "start"]
# use CMD during run time


