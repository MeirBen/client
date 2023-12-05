# Mortgage Calculator Application

This is a simple Mortgage Calculator web application built with Node.js and Express. The application allows users to input principal amount, annual interest rate, and loan duration in years to calculate the monthly mortgage payment.

## Features

- Basic form input to capture mortgage details.
- Calculation of monthly mortgage payments.
- Docker containerization for easy deployment and scalability.
- Continuous Integration and Deployment using GitHub Actions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/mortgage-calculator.git
cd mortgage-calculator
```
Then, install the dependencies:

```bash
npm install
```

## Running the Application

To run the application locally:

```bash
npm start
```

The server will start, and you can access the application at http://localhost:3000.

## Dockerizing the Application

To build the Docker image:

```bash
docker build -t mortgage-calculator .
```

To run the application using Docker:
    
```bash
docker run -p 3000:3000 mortgage-calculator
```
The application will be accessible at http://localhost:3000.

## Deployment
This application is set up with a basic CI/CD pipeline using GitHub Actions, which will automatically deploy the application upon any commits to the main branch.

## Built With
Node.js - The JavaScript runtime used.
Express - The web framework for Node.js.
Docker - Containerization platform.
GitHub Actions - CI/CD tool.
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

## Authors
Your Name - Initial work - YourUsername
## License
This project is licensed under the MIT License - see the LICENSE.md file for details.