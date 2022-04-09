FROM node:16

RUN apt-get update -y && apt-get upgrade -y && apt-get install bash-completion -y
RUN npm install pm2 -g
RUN npm install sequelize-cli -g

WORKDIR /app

COPY package.json /app/

RUN yarn

COPY . .

EXPOSE 8081

CMD ["pm2-dev", "./bin/www"]