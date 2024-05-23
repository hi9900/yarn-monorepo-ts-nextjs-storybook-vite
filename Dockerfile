FROM node:18-alpine AS builder

WORKDIR /app

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY package.json package.json
# COPY yarn.lock yarn.lock
# COPY .pnp.cjs .pnp.cjs
# COPY .pnp.loader.mjs .pnp.loader.mjs

# RUN rm -rf apps/web
# RUN npm install yarn --global --force

RUN yarn cache clean
RUN yarn install

COPY . .

RUN yarn ui build
RUN yarn web build
# RUN rm -rf apps/ticket/.next/cache

EXPOSE 3000
CMD ["yarn", "web", "start"]
