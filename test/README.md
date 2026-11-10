# Node.js CI/CD Pipeline with GitHub Actions and Microsoft Azure

![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?logo=node.js&logoColor=white)
![Azure](https://img.shields.io/badge/Microsoft%20Azure-App%20Service-0078D4?logo=microsoftazure&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=githubactions&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

## Project Overview

This project demonstrates the implementation of an automated **Continuous Integration and Continuous Deployment (CI/CD) pipeline** for a Node.js web application using GitHub Actions and Microsoft Azure App Service.

The pipeline automates application testing, build validation and deployment to Microsoft Azure whenever new code is pushed to the main branch of the GitHub repository.

The primary objective is to demonstrate practical DevOps principles by integrating source code management, automated testing, cloud infrastructure and deployment automation into a streamlined workflow.

## Project Objectives

- Develop and run a Node.js web application.
- Manage application source code using Git and GitHub.
- Implement Continuous Integration using GitHub Actions.
- Automate dependency installation and application testing.
- Configure Continuous Deployment to Microsoft Azure.
- Implement secure GitHub-to-Azure authentication using OpenID Connect (OIDC).
- Deploy the application to Azure App Service.
- Verify automatic deployment following code changes.

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js 24.x | Application runtime |
| JavaScript | Application development |
| npm | Package and dependency management |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | CI/CD automation |
| Microsoft Azure | Cloud hosting platform |
| Azure App Service | Application hosting |
| YAML | Workflow configuration |
| OpenID Connect (OIDC) | Secure cloud authentication |

## System Architecture

The project implements the following automated deployment architecture:

```text
                 DEVELOPER
                     |
                     |
              Node.js Application
                     |
                     |
                Git Commit
                     |
                     |
                 Git Push
                     |
                     v
              GITHUB REPOSITORY
                     |
                     v
               GITHUB ACTIONS
                     |
              CONTINUOUS INTEGRATION
                     |
             +-------+-------+
             |               |
             v               v
       Install npm       Run Automated
       Dependencies         Tests
             |               |
             +-------+-------+
                     |
               CI Successful?
                     |
                     v
             CONTINUOUS DEPLOYMENT
                     |
               Azure OIDC Login
                     |
                     v
             AZURE APP SERVICE
                     |
                     v
              LIVE NODE.JS
                APPLICATION
```

## Project Structure

```text
nodejs-project/
│
├── .github/
│   └── workflows/
│       └── azure-cicd.yml
│
├── test/
│   └── app.test.js
│
├── node_modules/
│
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

### File Descriptions

| File/Directory | Description |
|---|---|
| `.github/workflows/` | Contains GitHub Actions workflow configuration |
| `azure-cicd.yml` | Defines the automated CI/CD pipeline |
| `test/app.test.js` | Contains automated application tests |
| `server.js` | Main Node.js application |
| `package.json` | Project metadata and npm scripts |
| `package-lock.json` | Locks dependency versions |
| `README.md` | Project documentation |

## Application Features

The Node.js application:

- Creates an HTTP server.
- Responds to incoming browser requests.
- Displays a simple HTML welcome page.
- Uses an environment-defined port for cloud compatibility.
- Supports automated HTTP response testing.
- Runs locally and on Azure App Service.

## Prerequisites

Before running this project locally, ensure you have installed:

1. Node.js 24.x
2. npm
3. Git
4. Visual Studio Code (recommended)
5. A GitHub account

For cloud deployment, you also need:

1. A Microsoft Azure account.
2. An active Azure subscription.
3. An Azure App Service.
4. A GitHub repository.
5. Appropriate Azure deployment permissions.

## Local Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-cicd-project.git
```

### 2. Navigate into the project directory

```bash
cd nodejs-cicd-project
```

### 3. Install dependencies

```bash
npm install
```

For a clean installation using the lock file:

```bash
npm ci
```

### 4. Run automated tests

```bash
npm test
```

### 5. Start the application

```bash
npm start
```

### 6. Access the application

Open your browser and navigate to:

```text
http://localhost:3000
```

Expected application message:

**Hello! My Node.js CI/CD Project is Working!**

## Continuous Integration (CI)

Continuous Integration is implemented using GitHub Actions.

Whenever code is pushed to the `main` branch, GitHub Actions automatically executes the CI workflow.

The CI process includes:

1. Checking out the application source code.
2. Setting up Node.js 24.x.
3. Installing project dependencies.
4. Executing automated tests.
5. Validating application functionality.
6. Uploading the tested application artifact.

The CI process helps identify application errors before deployment.

## Continuous Deployment (CD)

Continuous Deployment is implemented using GitHub Actions and Microsoft Azure App Service.

After the CI job completes successfully, the CD job automatically:

1. Downloads the validated application artifact.
2. Authenticates with Microsoft Azure.
3. Uses OpenID Connect (OIDC) for secure authentication.
4. Deploys the application to Azure App Service.
5. Makes the application accessible through its Azure-hosted URL.

Deployment is dependent on the successful completion of the CI job.

If automated testing fails, deployment is prevented.

## Azure Configuration

The application is hosted using Microsoft Azure App Service.

The deployment environment uses the following configuration:

| Configuration | Value |
|---|---|
| Cloud Provider | Microsoft Azure |
| Hosting Service | Azure App Service |
| Operating System | Linux |
| Runtime | Node.js 24 LTS |
| Deployment Method | GitHub Actions |
| Authentication | OpenID Connect |
| Deployment Branch | main |

## GitHub Actions Secrets and Variables

The following GitHub repository secrets are required:

Navigate to:

**GitHub Repository → Settings → Secrets and variables → Actions**

### Repository Secrets

| Secret Name | Description |
|---|---|
| `AZURE_CLIENT_ID` | Microsoft Entra application client ID |
| `AZURE_TENANT_ID` | Microsoft Entra directory tenant ID |
| `AZURE_SUBSCRIPTION_ID` | Azure subscription ID |

### Repository Variables

| Variable Name | Description |
|---|---|
| `AZURE_WEBAPP_NAME` | Name of the Azure Web App |

These values are referenced by the GitHub Actions workflow during deployment.

Sensitive credentials are not hardcoded into the application source code.

## Deployment Process

To trigger an automated deployment, make a change to the application.

### 1. Update the application

Modify `server.js` or another application file.

### 2. Stage the changes

```bash
git add .
```

### 3. Commit the changes

```bash
git commit -m "Update Node.js application"
```

### 4. Push to GitHub

```bash
git push origin main
```

### 5. Monitor the pipeline

Navigate to:

**GitHub Repository → Actions**

Select the latest workflow execution to monitor the CI and CD jobs.

### 6. Verify deployment

Open the Azure App Service default domain to confirm that the updated application is running.

## Testing and Validation

The project includes automated tests using Node.js's built-in test runner.

Run:

```bash
npm test
```

The test validates that:

- The HTTP server starts successfully.
- The application responds to HTTP requests.
- The response status code is 200.
- The expected application content is returned.

Successful test execution confirms that the application passes its basic functional checks.

## Security Considerations

The project follows basic DevOps security practices:

- Uses GitHub repository secrets for sensitive configuration.
- Uses OpenID Connect for Azure authentication.
- Avoids storing permanent Azure credentials in source code.
- Uses restricted Azure deployment permissions.
- Keeps application configuration separate from source code.
- Uses GitHub Actions permissions to limit workflow access.

## Expected Outcome

Upon successful execution of the pipeline:

- The Node.js application passes automated tests.
- GitHub Actions completes the CI process.
- The CD job authenticates with Azure.
- The application is deployed to Azure App Service.
- The application becomes accessible through a public Azure URL.
- Subsequent code changes trigger another automated deployment.

## Live Application

**Azure Application URL:**

`https://YOUR-WEB-APP-NAME.azurewebsites.net`

**GitHub Repository:**

`https://github.com/YOUR_USERNAME/nodejs-cicd-project`

*Replace these placeholders with your actual deployment and repository URLs after successful deployment.*

## Project Deliverables

- Node.js web application.
- GitHub source code repository.
- Automated CI pipeline.
- Automated CD pipeline.
- GitHub Actions YAML configuration.
- Azure App Service deployment.
- OIDC authentication configuration.
- Automated application testing.
- Live application URL.
- Project documentation.

## Learning Outcomes

Through this project, I gained practical experience in:

- Node.js application development.
- Git and GitHub version control.
- CI/CD pipeline implementation.
- GitHub Actions workflow automation.
- Automated application testing.
- Microsoft Azure App Service.
- Cloud application deployment.
- OpenID Connect authentication.
- DevOps automation and deployment practices.

## Conclusion

This project demonstrates the practical implementation of a CI/CD pipeline for a Node.js application using GitHub Actions and Microsoft Azure.

By automating testing and deployment, the solution reduces manual deployment activities, improves application delivery consistency and demonstrates how modern DevOps practices can streamline software development and cloud deployment.

---

**Project Category:** DevOps Engineering / Cloud Computing

**Author:** Onome Vera Oviero

**GitHub:** [OnomeVera](https://github.com/OnomeVera)

**Technologies:** Node.js | Git | GitHub Actions | Microsoft Azure | CI/CD | YAML

**License:** MIT
