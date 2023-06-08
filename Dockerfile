FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/frontend

# Install app dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy app source code
COPY . .

# Expose port 3005
EXPOSE 3005

# Start the app
CMD ["npm", "start"]