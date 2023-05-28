FROM node:latest as builder
WORKDIR /app/client

COPY . .

RUN npm install

RUN npm install -g @angular/cli

RUN npm run build

FROM nginx

EXPOSE 4200

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/client/dist/client /usr/share/nginx/html
