FROM node:latest as builder

WORKDIR /app/backend

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:migrate:prod"]
