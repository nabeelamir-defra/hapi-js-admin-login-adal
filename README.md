# Hapi JS Admin Login using Azure Active Directory Authentication Library (ADAL)

This is a simple project that uses Hapi JS as a web server and logs a user in using their windows credentials

## Prequisites

- Node 18
- Copy the example.env, rename it to .env and add in the correct values for the variables

## Installation

```
npm i
```

## Run the project

```
npm start
```

Send a GET request to http://localhost:3000/login?username=<your windows email>&password=<your windows password>
