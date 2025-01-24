import { v4 as uuidv4 } from 'uuid';

interface Bug {
    id: string;
    description?: string;
    resolved?: boolean;
    userId?: number;
}

export class BugService {
    private bugs: Bug[] = [
        { id: uuidv4(), description: "Frontend button issue", userId: 1, resolved: true },
        { id: uuidv4(), description: "API endpoint error", userId: 1, resolved: false },
        { id: uuidv4(), description: "Database connection failure", userId: 2, resolved: false },
        { id: uuidv4(), description: "CSS styling glitch", resolved: false },
    ];

    // Get all bugs
    getAllBugs(): Bug[] {
        return this.bugs;
    }

    // Get a bug by ID
    getBugById(id: string): Bug | undefined {
        return this.bugs.find((bug) => bug.id === id);
    }

    // Add a new bug
    addBug(data: Partial<Bug>): Bug {
        if (!data) {
            throw new Error('Bug data must be provided');
        }
        const newBug: Bug = {
            id: uuidv4(),
            description: data.description || 'No description provided',
            resolved: false,
            userId: data.userId, // Only include userId if it's provided in data
            ...data // Spread data after setting defaults
        };
        this.bugs.push(newBug);
        return newBug;
    }

    // Update an existing bug
    updateBug(id: string, updates: Partial<Bug>): Bug | null {
        const index = this.bugs.findIndex((bug) => bug.id === id);
        if (index === -1) return null;

        const bug = this.bugs[index];
        if ("resolved" in updates) bug.resolved = updates.resolved!;
        if ("userId" in updates) bug.userId = updates.userId;

        return bug;
    }

    // Delete an existing bug
    removeBug(id: string): string {
        // Filter doesn't modify the array; it returns a new array
        this.bugs = this.bugs.filter(bug => bug.id !== id);
        return id;
    }
}
