FROM node:4
ADD ./package.json /code/package.json
WORKDIR /code
RUN npm install
ADD . /code
CMD node app/index
