FROM node:12.16.2-alpine
WORKDIR /open-react-template
COPY . .
RUN npm install
RUN npm install react-scripts -g
CMD ["npm", "start"]