# DOCKER-VERSION 1.1.0

FROM centos:centos6

RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

RUN yum update -y

RUN yum --enablerepo centosplus install -y npm

ADD ./bower.json /bower.json

#RUN npm install -g bower

# Bower have problems running in root, so we need to add --allow-root option
RUN yum install -y git
#RUN bower --allow-root install

ADD ./public /public

ADD ./bower_components /bower_components

ADD ./src /src

RUN cd /src; npm install

EXPOSE 3000

CMD ["node", "/src/index.js"]
