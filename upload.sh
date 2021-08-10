#!/bin/bash

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 119770767667.dkr.ecr.ap-northeast-2.amazonaws.com

docker build -t bsjung/jwt .

docker tag bsjung/jwt:latest 119770767667.dkr.ecr.ap-northeast-2.amazonaws.com/bsjung/jwt:latest

docker push 119770767667.dkr.ecr.ap-northeast-2.amazonaws.com/bsjung/jwt:latest
