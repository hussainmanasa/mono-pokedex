FROM node:16 as base
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./lerna.json ./
COPY . /app
RUN npm run build-pokedex

EXPOSE 3000
CMD ["npm", "run", "prod-pokedex"]