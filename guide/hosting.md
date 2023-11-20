# Hosting

As with all applications, Forager requires a computer or server to host from. As Forager is built on top of 
[Pocketbase](https://pocketbase.io), I recommend following their 
['Going to production'](https://pocketbase.io/docs/going-to-production) guide, especially the section titled ['Using a reverse proxy'](https://pocketbase.io/docs/going-to-production#using-reverse-proxy).

## NGINX

The below [NGINX](https://www.nginx.com) configuration is just one possibility of deploying
Forager (this can also be found on [Pocketbases website](v)):

```nginx
# An example NGINX configuration for Forager / Pocketbase.
# Please note that as Forager deploys it's own front-end
# alongside Pocketbase.

server {
    server_name forager.mywebsite.tld;
    client_max_body_size 20M;

    # Forager will be available at forager.mywebsite.tld
    # Pocketbase will be available at forager.mywebsite.tld/_

    # It is worth noting that due to caching, visting one
    # URL might not show the expected results; Clearing the
    # browser cache should fix these issues.
    location / {
        # check http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive
        proxy_set_header Connection '';
        proxy_http_version 1.1;
        proxy_read_timeout 360s;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # enable if you are serving under a subpath location
        # rewrite /yourSubpath/(.*) /$1  break;

        proxy_pass http://127.0.0.1:8090;
    }
}
```

## Docker

Forager includes support for Docker with Docker Compose to aid
with hosting. I would recommend reading through 
[the Docker section on the installation page](installation.html#docker).

If you wish to not have to clone down the repository,
you can also simply copy and paste both the 
[Dockerfile](https://raw.githubusercontent.com/CRBroughton/Forager/master/Dockerfile), as well as the [docker-compose.yml file](https://raw.githubusercontent.com/CRBroughton/Forager/master/docker-compose.yml) into a folder of your choice, and then follow the rest of the
[Docker instructions here](installation.html#docker).