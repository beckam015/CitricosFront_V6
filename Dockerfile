FROM nginx

COPY workdir/dist/citricos-front/ /usr/share/nginx/html
COPY nginx-entrypoint.sh /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod +x /usr/share/nginx/html/nginx-entrypoint.sh
EXPOSE 80
CMD ["/usr/share/nginx/html/nginx-entrypoint.sh"]