# Build

## Quick Start

1. Install Node.js and MySql
2. `git clone https://github.com/rusluck/BigRus.git`
3. `git submodules update`
4. `mysql -D <your database> < init.sql`
5. Build both client and server
   - [Setup for client](https://github.com/rusluck/BigRusClient/tree/master/docs/Build.md)
   - [Setup for server](https://github.com/rusluck/BigRusServer/tree/master/docs/Build.md)

## Build for docker

1. Install docker engine and docker compose
2. Create `.env` and fill out values
   - `DB_HOST`
   - `DB_USERNAME`
   - `DB_PASSWORD`
   - `DB_ROOT_PASSWORD`
   - `DATABASE`
   - `CLIENT_LOCAL_PORT`
   - `CLIENT_DOCKER_PORT`
   - `SERVER_LOCAL_PORT`
   - `SERVER_DOCKER_PORT`
3. `docker compose up`
