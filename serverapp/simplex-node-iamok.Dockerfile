ARG PORT

# Define the build arguments
FROM node:19-alpine3.16

WORKDIR /app

COPY package.json.

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]