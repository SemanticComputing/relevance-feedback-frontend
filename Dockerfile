FROM node:9-alpine

WORKDIR /app

RUN npm install -g serve

COPY *.json ./
RUN npm install

COPY . ./

ARG REACT_APP_BACKEND

RUN REACT_APP_BACKEND=${REACT_APP_BACKEND} npm run build

EXPOSE 5000

USER 9974

CMD serve -s build
