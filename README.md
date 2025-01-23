# Bug Tracking System Example

This document provides an overview of the bugs currently tracked in our system. Below is a list of example bugs, showcasing the structure and current state of each bug entry.

## Bug List

| **ID**                                   | **Description**               | **User ID** | **Resolved** |
|------------------------------------------|-------------------------------|-------------|--------------|
| 1a44ac9c-a343-439b-b4bc-a5dce52ab058     | Frontend button issue         | 1           | true         |
| 7df22330-7575-4f34-aef3-a8a1d376e8ef     | API endpoint error            | 1           | false        |
| 71d96c34-dbc7-4e7f-a65b-752030df3b16     | Database connection failure   | 2           | false        |
| 8c8e5329-b775-46db-acb3-12d9c10f3891     | CSS styling glitch            | -           | false        |

### Notes:
- **ID**: A unique identifier for each bug using UUID format.
- **Description**: A brief explanation of the issue.
- **User ID**: The ID of the user who reported or is assigned to the bug. This field is optional as not all bugs might have an associated user.
- **Resolved**: Indicates whether the bug has been resolved (`true`) or not (`false`).

### Key Features:
- **Separation of Concerns**: Routes and services are separated to enhance maintainability and scalability.
- **Unique IDs**: Each bug uses a UUID for identification, ensuring uniqueness even in large systems.
- **User Association**: Bugs can optionally be associated with user IDs for better tracking and responsibility assignment.

For more details on how bugs are managed, added, or updated, please refer to the `BugService` class documentation.