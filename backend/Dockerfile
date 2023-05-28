FROM node:latest as builder

WORKDIR /app/backend

COPY . .

RUN npm install

RUN npm install -g prisma 

RUN npm run build


# RUN npx prisma migrate dev --name init
RUN prisma generate


EXPOSE 3000

# CMD ["npm", "run", "dev"]

# CMD ["npm", "run", "start:migrate:prod"]
CMD ["./start.sh"]
