FROM node:14.13.1
WORKDIR /frontend/system/app
COPY ["package.json", "package-lock.json", "./"]

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]