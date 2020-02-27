FROM node:13

# Creating app directory
WORKDIR /app

# Installing dependencies
ADD package*.json ./
RUN npm install

# Copying source code
COPY . .

# Copying config file
ADD config-product.js config.js

EXPOSE 443
VOLUME [ "/mnt/data/root/private.pem", "/mnt/data/root/cert.crt" ]
CMD [ "node", "app.js" ]