#!/bin/sh

eval "$(ssh-agent -s)" #start the ssh agent
echo $GITHUB_SSH | base64 -D > .travis/deploy_key.pem
chmod 600 .travis/deploy_key.pem # this key should have push access
ssh-add .travis/deploy_key.pem
git remote add deploy git@github.com:zieka/bonsai-ui.git
git push --follow-tags deploy master