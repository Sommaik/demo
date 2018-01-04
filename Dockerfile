FROM node:8-alpine
USER root
RUN npm install -g typescript
RUN npm install -g @angular/cli
