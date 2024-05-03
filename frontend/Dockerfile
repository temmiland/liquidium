#
# Copyright (c) 2019-2022
# Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
#
# This file is part of Liquidium which is released under MIT license.
# See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
#

FROM node:18-alpine AS builder
LABEL MAINTAINER="Temmi Pietsch <welcome@temmi.land>"

COPY . /app
WORKDIR /app

RUN npm --version
RUN node --version
RUN npm cache clean -f
RUN rm -fr node_modules dist .parcel-cache
RUN npm install
RUN npm run build

# ------

FROM nginx:1.22-alpine
LABEL maintainer="Temmi Pietsch <welcome@temmi.land>"

RUN rm -fr /usr/share/nginx/html/*
COPY --from=builder /app/dist/ /usr/share/nginx/html/

RUN rm -rf /etc/nginx/conf.d
COPY ci/nginx /etc/nginx/conf.d

CMD /usr/sbin/nginx -g "daemon off;"

EXPOSE 80
