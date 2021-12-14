FROM node:16.13.1-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm install --production

RUN npm install pm2

COPY . .

CMD ["npm", "run", "pm2"]