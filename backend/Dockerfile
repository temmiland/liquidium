#
# Copyright (c) 2019-2022
# Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
#
# This file is part of Liquidium which is released under MIT license.
# See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
#

FROM openjdk:8-jdk-alpine as builder
LABEL maintainer="Tom Pietsch <hello@tomxpcvx.dev>"

COPY . /app
WORKDIR /app

RUN sh ./mvnw clean package

# ------

FROM openjdk:8-jdk-alpine
LABEL maintainer="Tom Pietsch <hello@tomxpcvx.dev>"

COPY --from=builder /app/target/ /app/
WORKDIR /app

ENTRYPOINT ["java", "-jar", "./liquidium-1.0.0.jar"]
