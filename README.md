# Stock trade simulation application as a homework task for FinBytes

## How to run

The project uses Yarn

After the project is cloned, you should run these commands.

```
yarn
```

To run the website

```
yarn dev
```

## Tests

To run unit tests

```
yarn test:unit
```

To run e2e tests

```
yarn test:e2e
```

## .env file configuration

The Env file configuration is as follows:

```
VITE_BACKEND_URL=
VITE_API_KEY=
```

## Ideas for improvement

- [ ] Add more unit tests (AmountInput, test if leading zeros get sent to state, test if on backspace, the number shown is 0 and not empty).
- [ ] Add more negative e2e test cases (If some other input is entered, should display error).
