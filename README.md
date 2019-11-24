## One Love Rewards Server
The RESTful API server for the One Love Rewards application

## Demo
[Live Demo](http://www.oneloverewards.surge.sh "http://www.oneloverewards.surge.sh")

## Endpoints
```

/api
.
 --/auth
    -POST
      --/login
 --/dashboard/members
    -GET
      --/
      --/:phone_number
      --/points/:customer_id
    -POST
      --/
      --/points
    -PATCH
      --/points
    -DELETE
      --/:phone_number
 --/dashboard/rewards
    -GET
      --/
 --/customers
    -GET
      --/:phone_number
      --/rewards/:id

```

## Setting Up

- Install dependencies: `npm install`
- Create development and test databases: `createdb oneloverewards`
- Create database user: `createuser bobmarley`
- Grant privileges to new user in `psql`:
  - `GRANT ALL PRIVILEGES ON DATABASE oneloverewards TO bobmarley`
- Prepare environment file: `cp example.env .env`
- Replace values in `.env` with your custom values.
- Bootstrap development database: `knex migrate:latest`

## Sample Data

- To seed the database for development: `knex seed:run`


## Authors
1: Nathan Szelag
