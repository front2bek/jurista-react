FROM node:latest

WORKDIR /app

RUN npm install react-i18next i18next --save

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
