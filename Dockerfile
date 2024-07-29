# Use the official Node.js image as base
FROM node:14-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm build

# Expose the port Next.js is running on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV production

# Start the Next.js application
CMD ["pnpm", "start"]
