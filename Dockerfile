FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

RUN npm install pm2 -g

EXPOSE 80
CMD [ "pm2-runtime", "app.js" ]
