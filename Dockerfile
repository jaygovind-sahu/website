FROM node:alpine AS builder

RUN apk --no-cache --virtual build-dependencies add git

RUN mkdir -p /app/dist
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
