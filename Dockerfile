FROM nginx:stable
MAINTAINER Your Name "rosliani@alterra.id"

RUN mkdir -p /coba-coba/www/EcommerceFrontEnd
RUN mkdir -p /coba-coba/log

COPY default.conf /etc/nginx/conf.d/
ADD . /coba-coba/www/EcommerceFrontEnd/

WORKDIR /coba-coba/www/EcommerceFrontEnd
