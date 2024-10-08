# Basic PostgreSQL Node Server

This project sets up a basic Node.js server using Express and Sequelize to interact with a PostgreSQL database. It provides a simple CRUD (Create, Read, Update, Delete) API for managing user data.

## Project Structure

- `index.js`: Main application file that defines the CRUD routes and starts the server.
- `db.js`: Database connection setup and configuration using Sequelize.
- `Dockerfile`: Instructions for building a Docker image for the Node.js application.
- `docker-compose.yml`: Configuration for running the application and PostgreSQL database as services using Docker Compose.
- `user.model.js`: Sequelize model definition for the `User` entity.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Docker](https://www.docker.com/)

## Environment Variables

The following environment variables are required for the server to connect to the PostgreSQL database:

- `DB_HOST`: Hostname of the database (should be set to `db` for Docker Compose).
- `DB_USER`: Database user (default: `postgres`).
- `DB_PASSWORD`: Database password (default: `postgres`).
- `DB_NAME`: Name of the database (default: `mydatabase`).
- `DB_PORT`: Port for the database connection (default: `5432`).

## Running the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and start the services using Docker Compose:

   ```bash
   docker-compose up
   ```

3. Access the server at `http://localhost:3000`.
