
# Ayna Backend Assignment

[Workin Demo](https://youtu.be/iBTTOBocI7I)

[Test Endpoints](https://hoppscotch.io/)

This repo achives the backend functionality asked by the organisation. The functionality was to create a echo websocket API using Strapi.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Aayush0606/Strapi-WebSocket
```

Go to the project directory

```bash
  cd directory-name
```

Install dependencies

```bash
  npm install
```

Add .env and popu;ate it with values

```bash
  cp .env.example .env || copy .env.example .env
```

Start the server

```bash
  npm run develop
```


## API Reference

#### Register user

```http
  POST http://localhost:1337/api/auth/local/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password |


#### Login user

```http
  POST http://localhost:1337/api/auth/local
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `identifier`      | `string` | **Required**. user email |
| `password`      | `string` | **Required**. user password |



#### User message

```http
  GET http://localhost:1337/api/messages/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bearer token`      | `string` | **Required**. user jwt token |

 Returns all user message


#### Socket

#### connection:  
```http
  ws://localhost:1337
```
#### message:  
```http
  ws://localhost:1337
  event:/message
```
