#!/bin/sh

kubectl delete -f deploy-jwt.yaml -n test-web
kubectl apply  -f deploy-jwt.yaml -n test-web
