# nuxt-project

> Esteve&#39;s Education

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Deployment Static project
- `npm run generate`
- `scp -r .\dist\ <user>@<domain>:/home/<user>`
- `ssh <user>@<domain>`
- `mv dist /var/www/<folder-domain>/nuxt-project/dist`
- `cd /var/www`
- `sudo chown -R www-data:www-data <folder-domain>/`
