import { v4 as uuidv4 } from 'uuid';

export default [
    {
        id: uuidv4(),
        description: "Frontend button issue",
        userId: 1,
        resolved: true,
        priority: "High",
        tags: ["UI", "Critical"],
        reportedAt: "2025-01-01",
        severity: "Major"
    },
    {
        id: uuidv4(),
        description: "API endpoint error",
        userId: 1,
        resolved: false,
        priority: "Medium",
        tags: ["Backend", "API"],
        reportedAt: "2025-01-10",
        severity: "Moderate"
    },
    {
        id: uuidv4(),
        description: "Database connection failure",
        userId: 2,
        resolved: false,
        priority: "Critical",
        tags: ["Database", "Server"],
        reportedAt: "2025-01-05",
        severity: "Critical"
    },
    {
        id: uuidv4(),
        description: "CSS styling glitch",
        resolved: false,
        priority: "Low",
        tags: ["UI", "Styling"],
        reportedAt: "2025-01-15",
        severity: "Minor"
    },
    {
        id: uuidv4(),
        description: "Search functionality not returning results",
        userId: 3,
        resolved: false,
        priority: "High",
        tags: ["Frontend", "Search"],
        reportedAt: "2025-01-11",
        severity: "Major"
    },
    {
        id: uuidv4(),
        description: "User login page throwing 500 error",
        userId: 4,
        resolved: false,
        priority: "Critical",
        tags: ["Backend", "Auth"],
        reportedAt: "2025-01-09",
        severity: "Critical"
    },
    {
        id: uuidv4(),
        description: "Mobile responsiveness issue on homepage",
        userId: 5,
        resolved: true,
        priority: "Medium",
        tags: ["UI", "Mobile"],
        reportedAt: "2025-01-12",
        severity: "Moderate"
    },
    {
        id: uuidv4(),
        description: "Session timeout not working correctly",
        userId: 2,
        resolved: false,
        priority: "High",
        tags: ["Auth", "Security"],
        reportedAt: "2025-01-13",
        severity: "Major"
    },
    {
        id: uuidv4(),
        description: "Notifications not being sent to users",
        userId: 3,
        resolved: false,
        priority: "Medium",
        tags: ["Backend", "Notifications"],
        reportedAt: "2025-01-14",
        severity: "Moderate"
    },
    {
        id: uuidv4(),
        description: "Admin panel taking too long to load",
        userId: 4,
        resolved: true,
        priority: "Low",
        tags: ["Performance", "Admin"],
        reportedAt: "2025-01-08",
        severity: "Minor"
    },
    {
        id: uuidv4(),
        description: "Forgot password email not being sent",
        userId: 5,
        resolved: false,
        priority: "High",
        tags: ["Auth", "Email"],
        reportedAt: "2025-01-07",
        severity: "Major"
    }
];

