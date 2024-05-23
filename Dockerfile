FROM node:18-alpine AS builder

WORKDIR /app

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY package.json package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/web/package.json packages/web/package.json

RUN yarn cache clean
RUN yarn install
COPY .pnp.loader.mjs .pnp.loader.mjs

COPY . .

RUN yarn web build

EXPOSE 3000
CMD ["yarn", "web", "start"]

