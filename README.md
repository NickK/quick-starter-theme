# gulp-docker-starter
Quick Starter Theme for Static/Wordpress sites


## Gulp
### Requirements
1. Node
2. NPM

### Static
Compiles inside /src/ folder

```gulp watch```

### Build
Compiles inside /wp-content/themes/[NAME]/

```gulp watch --build```

### Production
Minifies and compiles inside /wp-content/themes/[NAME]

```gulp minify --build```


## Docker
1. Make any edits that you will need inside the vhost.conf file inside .docker folder
2. Make changes to your wp-config file
```
DB_NAME: db
DB_USER: root
DB_PASSWORD: root
DB_HOST: mysql
```
3. Might need to chown /var/www/html again && and create .htaccess to remote server
4. Add virtual host to local computer
