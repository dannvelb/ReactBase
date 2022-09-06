FROM node:latest
WORKDIR /usr/src/frontend/web
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001
CMD npm run build && npm run start