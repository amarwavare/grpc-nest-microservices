FROM node:20-alpine

# USER root

ARG NOD_ENV=production

ENV NODE_ENV=${NOD_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm config set strict-ssl false

# Ref. : https://github.com/nodejs/docker-node/issues/740

# RUN sudo chmod -R 777 usr/src/app

# RUN addgroup --system --gid 1001 node
# RUN adduser --system --uid 1001 node
# RUN usermod-aG docker grpc-nest
# RUN newgrp - docker

RUN npm install -f \
    && npm install --only=dev --no-package-lock -f \
    && npm install --only=production --no-package-lock -f \
    && npm install -g @nestjs/cli -f

COPY . .

# RUN ls

# RUN ls -la node_modules

ARG SERVICE

ENV SERVICE=${SERVICE}

RUN npm run build ${SERVICE} \
    # && chmod +x /usr/src/app/dist/apps/${SERVICE}/authentication.proto \
    && chown -R node:node /usr/src/app

    # sudo chown -R 1001:0 "/.npm"

# Allow change modify files in sub directory
# RUN chmod +x /usr/src/app
# RUN chmod +x /usr/src/app/dist/apps/${SERVICE}/authentication.proto

# RUN ls -la dist
# RUN ls -la apps
# RUN ls -la ${SERVICE}
# RUN ls -la src

USER node

# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl --fail http://172.20.48.1:8000/

# CMD node dist/apps/${SERVICE}/src/main