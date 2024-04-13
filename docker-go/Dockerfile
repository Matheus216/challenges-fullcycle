FROM golang:alpine3.19 AS builder

WORKDIR /usr/src/app

COPY ./files .

RUN go mod download && go mod verify 

RUN go build -v -o /usr/local/bin/app ./...

RUN cd .. &&  rm -rf ./app

#CMD ["app"] 


