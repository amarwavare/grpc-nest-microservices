# Steps to get gRPC microservices functional -

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>



## Description

[Nest](https://github.com/amarwavare/grpc-nest-microservices) framework TypeScript gRPC starter repository.

## Installation & Setup

1. Install [Node Js](https://nodejs.org/en/download/) latest versior / LTS
2. ``` $ npm i -g @nestjs/cli ```
3. Install [PostgreSQL](https://www.postgresql.org/download/) & enable CLI based on system OS.
4. Install [Redis](https://redis.io/docs/install/install-redis/) based on system OS. For WSL [How to install Redis on Windows 11 | Redis Enterprise](https://redis.com/blog/install-redis-windows-11/)
5. [WSL](https://www.microsoft.com/store/productId/9PN20MSR04DW?ocid=pdpshare) Installation
4. Check Redis WSL CLI -
``` cmd
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install redis
sudo apt-get install redis-server
sudo service redis-server status
sudo service redis-server start
sudo service redis-server status
redis-cli
127.0.0.1:6379> ping
PONG
127.0.0.1:6379> exit
sudo service redis-server stop
```
5. Check PostgreSQL -
``` postgresql
psql -U postgres
<password>
postgres=# create database grpcdatabase;
CREATE DATABASE
postgres=# create user grpcuser with encrypted password 'grpcpassword';
CREATE ROLE
postgres=# grant all privileges on database grpcdatabase to grpcuser;
GRANT
postgres=# alter user grpcuser createdb;
ALTER ROLE
postgres=# alter user grpcuser createrole;
ALTER ROLE
postgres=# \du 
List of roles Role name | Attributes             | Member of 
------------------------+------------------------+----------- 
grpcuser                | Create role, Create DB | {}
postgres=# \q
```
---------------------------------------
```bash
$ npm install
```

## Running the app specific service manually

```bash
# development
$ npm run start gateway

# watch mode
$ npm run start:dev gateway

# production mode
$ npm run start:prod gateway
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
