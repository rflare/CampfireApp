# Build

## Quick Start

1. Install Node.js and MySql
2. `git clone https://github.com/rflare/campfire.git`
3. `git submodules update`
4. On any submodules, checkout to master
5. `mysql -D <your database> < init.sql`
6. Build both client and server.
   - [Setup for client](https://github.com/rflare/campfire-client/tree/master/docs/Build.md)
   - [Setup for server](https://github.com/rflare/campfire-server/tree/master/docs/Build.md)

## Build for docker

1. Install docker engine and docker compose
2. [Setup necessary environment variables for Docker](./docs/ENVIRONMENT.md)
3. `docker compose up`
