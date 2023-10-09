# This image will be published as dspace/dspace-angular
# See https://github.com/DSpace/dspace-angular/tree/main/docker for usage details

FROM node:18-alpine
WORKDIR /app
ADD . /app/
EXPOSE 4000

# Ensure Python and other build tools are available
# These are needed to install some node modules, especially on linux/arm64
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

# We run yarn install with an increased network timeout (5min) to avoid "ESOCKETTIMEDOUT" errors from hub.docker.com
# See, for example https://github.com/yarnpkg/yarn/issues/5540
RUN yarn install --network-timeout 300000
RUN yarn build:prod

CMD yarn run serve:ssr
