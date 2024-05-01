FROM node:14-alpine AS build
WORKDIR /frontend 
COPY ./package*.json .
RUN npm i 
COPY . .
RUN npm run build
FROM nginx:alpine
# RUN rm -rf /usr/share/nginx/html/*
COPY --from=build frontend/dist /usr/share/nginx/html/
# EXPOSE 8080 # running on container nginx
CMD [ "nginx","-g","daemon off;" ]