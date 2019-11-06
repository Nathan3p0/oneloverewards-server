## One Love Rewards Server
The RESTful API server for the One Love Rewards application

## Demo
[Live Demo](http://www.oneloverewards.surge.sh "http://www.oneloverewards.surge.sh")

## Endpoints
** Show All Customers **

* **URL**

  /api/dashboard/members

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "John Doe", email : "johndoe@gmail.com", phone_number : "7775550404" }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No customers were found in the database" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Unauthorized Request" }`

* **Sample Call:**

  ```javascript
    fetch(`/api/dashboard/members`, {
            headers: {
                'Authorization': `bearer token here}`
            }
        });
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
