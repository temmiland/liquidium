#
# Copyright (c) 2019-2022
# Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
#
# This file is part of Liquidium which is released under MIT license.
# See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
#

FROM openjdk:8-jdk-alpine as builder
LABEL maintainer="Temmi Pietsch <welcome@temmi.land>"

COPY . /app
WORKDIR /app

RUN sh ./mvnw clean package

# ------

FROM openjdk:8-jdk-alpine
LABEL maintainer="Temmi Pietsch <welcome@temmi.land>"

COPY --from=builder /app/target/ /app/
WORKDIR /app

ENTRYPOINT ["java", "-jar", "./liquidium-1.0.0.jar"]
