ARG PORT

# Define the build arguments
FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "run", "dev"]