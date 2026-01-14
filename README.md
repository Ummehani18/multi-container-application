# Multi-Container Application Deployment

A production-style multi-container backend application deployed on AWS EC2 using Docker Compose, with an automated CI/CD pipeline implemented via GitHub Actions.

This project focuses on **containerization, cloud deployment, and deployment automation**, rather than application complexity.



## Table of Contents

* Overview
* Architecture
* Tech Stack
* Features
* Project Structure
* Local Setup
* Cloud Deployment
* CI/CD Pipeline
* Verification
* Security Considerations
* Future Enhancements



## Overview

This project demonstrates how to design, deploy, and automate a multi-container application in a production-like environment.

The application consists of:

* A Node.js REST API
* A MongoDB database
* Docker Compose for orchestration
* AWS EC2 for hosting
* GitHub Actions for CI/CD automation

The API functionality is intentionally simple to keep the focus on **DevOps practices and infrastructure workflows**.



## Architecture

```
Internet
   |
   | (HTTP :3000)
   v
Node.js API (Docker Container)
   |
   v
MongoDB (Docker Container)
```

* Containers are orchestrated using Docker Compose
* MongoDB runs in a private container network
* API is exposed publicly via EC2 security groups
* Deployment is automated via GitHub Actions



## Tech Stack

* **Backend**: Node.js, Express
* **Database**: MongoDB
* **Containerization**: Docker, Docker Compose
* **Cloud Provider**: AWS EC2
* **CI/CD**: GitHub Actions
* **OS**: Ubuntu Linux



## Features

* Multi-container application using Docker Compose
* Persistent database storage using Docker volumes
* Cloud deployment on AWS EC2
* Secure SSH access and firewall configuration
* Automated CI/CD pipeline triggered on GitHub push
* Zero manual deployment after CI/CD setup



## Project Structure

```
multi-container-application/
├── api/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── models/
├── docker-compose.yml
└── .github/
    └── workflows/
        └── deploy.yml
```



## Local Setup

### Prerequisites

* Docker
* Docker Compose

### Run locally

```bash
docker-compose up --build
```

API will be available at:

```
http://localhost:3000
```



## Cloud Deployment (AWS EC2)

### Steps

1. Provision an EC2 instance (Ubuntu)
2. Install Docker and Docker Compose
3. Clone the repository
4. Run Docker Compose

```bash
docker-compose up -d --build
```

API will be accessible via:

```
http://<EC2_PUBLIC_IP>:3000
```



## CI/CD Pipeline

This project uses **GitHub Actions** to automate deployment.

### Workflow behavior

* Triggered on every push to the `main` branch
* Connects to EC2 via SSH
* Pulls latest code
* Rebuilds and restarts containers using Docker Compose

### Outcome

* No manual SSH required after setup
* Push-to-deploy workflow
* Consistent and repeatable deployments



## Verification

To verify the deployment:

```bash
curl http://<EC2_PUBLIC_IP>:3000/todos
```

Expected response:

```json
[]
```

This confirms the API is live and containers are running correctly.



## Security Considerations

* SSH access restricted using AWS Security Groups
* Private SSH keys are never committed to the repository
* GitHub Secrets used for sensitive credentials
* Database container is not exposed publicly



## Future Enhancements

* Nginx reverse proxy with domain-based access
* HTTPS using Let’s Encrypt
* Automated database backups
* Centralized logging and monitoring
* Health checks and container restart policies



## Project Type

**Category**: DevOps / Cloud / CI/CD

**Focus**: Deployment automation and infrastructure workflows

---

### Final Note

This project emphasizes **real-world DevOps practices** such as container orchestration, cloud deployment, and CI/CD automation over application complexity.

## Project Reference

This Project follows the requirement defined by 
<a href="https://roadmap.sh/projects/multi-container-service" >roadmap.sh</a>
