<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NestJS boilerplate with msqyl and typeorm

[![Run Tests on push](https://github.com/marianotella/nest-with-tests-boilerplate/actions/workflows/tests.yml/badge.svg)](https://github.com/marianotella/nest-with-tests-boilerplate/actions/workflows/tests.yml)

## Description

[NestJS](https://github.com/nestjs/nest) boilerplate for a typical project with mysql and typeorm.

## Table of Contents

- [Features](#features)
- [How to use](#how-to-use)
- [Tests](#tests)

## Features

- [x] Database ([typeorm](https://www.npmjs.com/package/typeorm)).
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] E2E and units tests.
- [x] CI (Github Actions).

## How to use

```bash
git clone --depth 1 https://github.com/marianotella/nest-with-tests-boilerplate.git my-nest
cd my-nest/
cp env-example .env
```

```bash
npm install
npm run start:dev
```

## Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```