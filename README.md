[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test (Not captured)

# e2e tests
$ npm run test:e2e (currently working)

# test coverage
$ npm run test:cov
```

# API Documentation

## Add a New Person

**Request:**

- **Method:** POST
- **Endpoint:** `localhost:3000/api/`
- **Payload:**

```json
{
  "name": "musk"
}
```
Response:

Status Code: 201 Created

```json
{
  "message": "Added successfully",
  "statusCode": 201,
  "status": "Success",
  "data": {
    "id": 14,
    "name": "musk"
  }
}

```

## Search Persons

**Request:**

- **Method:** GET
- **Endpoint:** `localhost:3000/api/`
- Endpoint: localhost:3000/api?search=musk

Response:

Status Code: 200 OK
```json
{
  "message": "Fetched successfully",
  "statusCode": 200,
  "status": "Success",
  "data": [
    {
      "id": 7,
      "name": "musk"
    },
    {
      "id": 8,
      "name": "musk"
    },
    {
      "id": 9,
      "name": "musk"
    },
    {
      "id": 10,
      "name": "musk"
    },
    {
      "id": 11,
      "name": "musk"
    }
  ]
}

```
## Search a Person

**Request:**

- **Method:** GET
- **Endpoint:** `localhost:3000/api/user_id`

Response:
Status Code: 200 OK

```json
{
  "message": "Fetched successfully",
  "statusCode": 200,
  "status": "Success",
  "data": {
    "id": 12,
    "name": "musk"
  }
}
```


## Update a Person

**Request:**

- **Method:** PATCH
- **Endpoint:** `localhost:3000/api/user_id`
- **Payload:**

```json
{
  "name": "musk"
}
```
Response:

Status Code: 201 Created
Body:

```json
{
  "message": "Updated successfully",
  "statusCode": 201,
  "status": "Success",
  "data": {
    "id": 1,
    "name": "musk"
  }
}
```

## Delete a Person

**Request:**

- **Method:** DELETE
- **Endpoint:** `localhost:3000/api/user_id`

Response:

Status Code: 200 OK

```json
{
  "message": "Deleted successfully",
  "statusCode": 200,
  "status": "Success",
  "data": {
    "raw": [],
    "affected": 1
  }
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
