# How to deploy on Heroku

## Resigter new account Heroku
very simple

## Create new app NodeJS on heroku
very simple

## Create new repo local for heroku
Go to `admin-portal`, run `yarn build` or `npm run build`

Copy `/build` from `admin-portal` to root project

Copy all files in root included hidden files (such as `.gitignore`, `.env`) and excluded `admin-portal`, `node_modules`, `.git` to new repo

In new repo, edit file `.gitignore` with comment `/build` and `.env`

That's all!

## Add `git` for local and remote to heroku
Add git for local by `git init`

Login heroku: `heroku login`

Remote to heroku: `git remote add heroku [link.git]`

Commit and deploy:
```bash
git add -A
git commit -m "init project"
git push heroku master
```

## PostgreSQL on Heroku
On heroku dashboard, go tab `Resource`, at `Add-ons`, search `postgre` and select the option, it will create new postgresql on heroku and connect app to it.

Go to [https://data.heroku.com](https://data.heroku.com) to view your postgreSQL

In data.heroku, choose tab `Settings`, click `View Credentials` to view database info.

In `.env` at local, correct it with info here.

After that, you can deploy again app to heroku without available data on your database.

## Remote local database to postgresql on heroku

Go to [https://devcenter.heroku.com/articles/heroku-postgresql#pg-push-and-pg-pull](https://devcenter.heroku.com/articles/heroku-postgresql#pg-push-and-pg-pull) to view document if you need.

```bash
heroku pg:pull DATABASE_URL mylocaldb --app transport-passener
``` 

`transport-passenger` is your app name

Here on local will have remote to your postgreSQL on heroku

Open `pgadmin3` to edit your database.

Run script or do anything in your database at local
Heroku
```bash
heroku pg:push mylocaldb DATABASE_URL --app transport-passenger
```

`transport-passenger` is your app name

## View your achievement
Go to your app to view your achievement



## APIs
View [APIs here](https://huynhsamha.github.io/transport-passenger/api)


## Documents - Contributing
View [Documents here](https://huynhsamha.github.io/transport-passenger/docs)


## Deploy AWS
View [instructions here](https://huynhsamha.github.io/transport-passenger/aws)
