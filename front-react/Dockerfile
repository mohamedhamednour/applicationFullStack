FROM node:16.17.0-alpine
WORKDIR /front-react

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
COPY . ./
EXPOSE 3000
