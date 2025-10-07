# Use official Node.js image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the app port (if your app listens on 3000, change it)
EXPOSE 3000

# Run your app
CMD ["npm", "start"]