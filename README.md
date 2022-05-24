# Grocery Buddy App

## What I learned

How to create a CRUD app with symfony and react with following commands:
Inside symfony-mamp folder, run:

## Process

```
symfony new web
```

- cd into web folder, run:

```
composer require doctrine/orm
```

```
composer require doctrine
```

- choose x
- go to web > .env, change to this line:
  DATABASE_URL='mysql://root:lionPass@db:3306/reactCRUD?serverVersion=5.7'
- inside symfony-mamp > .env, change to this line:
  DATABASE_NAME=reactCRUD

- go to symfony-mamp run the following, inside phpAdmin, reactCRUD database is created.

```
docker-compose up --build
```

- Create entities
  cd web

```
composer require symfony/maker-bundle --dev
```

```
php bin/console make:entity
```

- class name: Project
- property: name, string, 255, not null
  -property: description, text, not null

- go to symfony-mamp, open symfony-mamp-www1 cli and run:

```
php bin/console make:migration
```

next:

```
php bin/console doctrine:migrations:migrate
```

- create Projectcontroller file

```
php bin/console make:controller ProjectController
```

- create SpaController file

```
php bin/console make:controller SpaController
```

- install twig

```
composer require templates
```

- (inside web folder) install webpack encore

```
composer require symfony/webpack-encore-bundle
```

- install dependencies

```
npm install
```

npm add @babel/preset-react --include=dev

npm add --include=dev react react-dom prop-types axios

npm add @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime

install alert packages:

```
npm i sweetalert2
```

- inside webpack.config.js, add this:

```
.enableReactPreset()
```

- running webpack

```
npm run watch
```
