# EduT product delivery — Jira Cloud workflow

**Status:** Workflow specification only. Jira Cloud is not connected to this repository yet and no issues have been created automatically.

## Team
- Founder / product lead: prioritization, product direction, delivery oversight
- Developer 1 and Developer 2: application engineering, code review and release work
- Marketing specialist: positioning, acquisition campaigns and launch communications

## Proposed Jira Cloud setup
- Board: EduT Product (Kanban)
- Issue types: Epic, Story, Bug, Task
- Workflow: Backlog → Selected → In Progress → In Review → Done
- Branch naming: `EDUT-123-short-description`
- Pull requests include their corresponding Jira issue key
- Definition of Done: reviewed change, tests passing, relevant accessibility and privacy checks, release notes where needed

## Proposed epics
1. iOS application stability and store readiness
2. Android application implementation and store readiness
3. Scholarship search and content accuracy
4. Privacy, account security and accessibility
5. Marketing website and user acquisition
6. Analytics and incident management

## Connection steps
1. Connect Atlassian/Jira Cloud to the account with authorization.
2. Create the EduT Jira project and workflows.
3. Connect the Jira GitHub integration to the EduT repository.
4. Create issues from the approved backlog and reference issue keys in pull requests.

Do not interpret this document as proof of native app store publication, Jira activity or a cloud deployment.
