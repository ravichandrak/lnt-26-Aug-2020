FROM node:alpine
WORKDIR '/nodejs-api'

COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]