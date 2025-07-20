# 🏎️ Formula 1 Minimal API

A minimal RESTful API built with **Node.js** and **Fastify**, simulating a Formula 1 data service. This API provides basic data about F1 teams and drivers, and includes simple CORS configuration and route parameter handling.

## 🚀 Features

* ✅ Fast and lightweight HTTP server with [Fastify](https://www.fastify.io/)
* 🌐 CORS enabled (accepts all origins)
* 📄 JSON responses for:

  * All teams (`/teams`)
  * All drivers (`/drivers`)
  * Specific driver by ID (`/drivers/:id`)
* 📦 Typed route parameters using TypeScript-style declaration

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/)
* [Fastify](https://www.fastify.io/)
* [@fastify/cors](https://www.npmjs.com/package/@fastify/cors) – CORS handling for API requests

## 📂 Project Structure

```
project-root/
└── index.js  # API server with routes and data
```

## 📡 API Endpoints

### GET `/teams`

Returns a list of Formula 1 teams.

#### Example Response:

```json
{
  "teams": [
    { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom" },
    { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" },
    { "id": 3, "name": "RedBull Racing", "base": "Milton Keynes, United Kingom" }
  ]
}
```

---

### GET `/drivers`

Returns a list of Formula 1 drivers.

#### Example Response:

```json
{
  "drivers": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 2, "name": "Lewis Hamilton", "team": "Ferrari" },
    { "id": 3, "name": "Lando Norris", "team": "McLaren" }
  ]
}
```

---

### GET `/drivers/:id`

Returns a specific driver by ID.

#### Example Success:

`GET /drivers/1`

```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

#### Example Error:

`GET /drivers/99`

```json
{
  "message": "Driver Not Found"
}
```

## ▶️ How to Run

### 1. Clone and Install

```bash
git clone https://github.com/your-username/f1-fastify-api.git
cd f1-fastify-api
npm install
```

### 2. Run the Server

```bash
node index.js
```

### 3. Test in Browser or API Client

* [http://localhost:3636/teams](http://localhost:3636/teams)
* [http://localhost:3636/drivers](http://localhost:3636/drivers)
* [http://localhost:3636/drivers/1](http://localhost:3636/drivers/1)

## 📌 Notes

* CORS is open to all origins (`origin: "*"`). Adjust for production environments.
* The server logs requests using Fastify’s built-in logger.

## 👤 Author

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)

---
