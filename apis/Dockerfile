FROM node:14

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN apt-get update -y && apt-get install git -y && apt-get install mc -y
RUN git init && git remote add origin https://github.com/admhabits/api-serve.git

RUN npm install

CMD ["node", "Server.js"]
EXPOSE 8181

