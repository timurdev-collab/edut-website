# AWS Cloud and Jira Cloud integration plan

> **Planning documentation only.** This repository does not claim an active AWS deployment, a Jira project, or implemented Jira automation. Earlier local functionality is unchanged.

## Project
EduT Scholarship Education Web App

## Proposed AWS architecture
CloudFront + S3 static assets or AWS Amplify Hosting; API Gateway + Lambda for optional backend

This architecture is a **proposal**, not a deployed service. Some AWS services listed can incur fees. Do not run infrastructure provisioning without an AWS budget, billing alarms, least-privilege credentials and explicit deployment approval. For local development, continue to use the repository's existing documented commands.

## Jira Cloud project management
Use a Jira Cloud Kanban board with issue types Epic, Story, Task and Bug. Suggested workflow: Backlog -> Selected -> In Progress -> Code Review -> Done. Reference the Jira issue key in branch names and pull request titles once Jira is configured. Link commits and PRs through Jira's GitHub integration if authorized.

### Suggested backlog
1. Inventory current frontend and APIs
2. Define user-data privacy and auth requirements
3. Add accessibility and Lighthouse checks
4. Plan AWS-hosting infrastructure and budget
5. Connect issue tracking to GitHub pull requests

## Evidence checklist before mentioning AWS/Jira as hands-on experience
- AWS: deployed resources, infrastructure code, cost guardrails, CloudWatch evidence and reproducible setup instructions.
- Jira: created Jira board/issues, linked repo or PRs, and a demonstrable ticket history.

**Current status:** AWS architecture and Jira workflow are documented; services are **not connected or deployed**.
