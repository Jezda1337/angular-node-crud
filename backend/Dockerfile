FROM node:latest as builder

WORKDIR /app/backend

COPY . .

RUN npm install

RUN npm run build

RUN prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:migrate:prod"]
