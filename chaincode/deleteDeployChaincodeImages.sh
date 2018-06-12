#!/usr/bin/env bash
docker images -a | grep "filestore" | awk '{print $3}' | xargs docker rmi
