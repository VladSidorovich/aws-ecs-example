FROM node:8 as build

RUN mkdir -p /app

WORKDIR /app

COPY ./app ./

RUN npm install

FROM node:8-alpine

COPY --from=build /app /

EXPOSE 3000

CMD ["node", "app.js"]