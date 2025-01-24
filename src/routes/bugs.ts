import express, { Request, RequestHandler, Response } from "express";
import { BugService } from "../services/bugService";

const router = express.Router();
const bugService = new BugService();

// Get all bugs
router.get("/", (_, res) => {
    res.json(bugService.getAllBugs());
});

// Get a specific bug by ID
router.get("/:id", ((req: Request, res: Response) => {
    const bug = bugService.getBugById(req.params.id);
    if (!bug) return res.status(404).send("Bug not found");
    res.json(bug);
}) as RequestHandler);

// Create a new bug
router.post("/", (req, res) => {
    try {
        const newBug = bugService.addBug(req.body);
        res.status(201).json(newBug);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

// Update a bug (patch)
router.patch("/:id", ((req: Request, res: Response) => {
    const updatedBug = bugService.updateBug(req.params.id, req.body);
    if (!updatedBug) return res.status(404).send("Bug not found");
    res.json(updatedBug);
}) as RequestHandler);


// Delete an existing bug
router.delete("/:id", ((req: Request, res: Response) => {
    const deletedBug = bugService.getBugById(req.params.id);
    if (!deletedBug) return res.status(404).send("Bug not found");
    bugService.removeBug(deletedBug.id as string);
    res.status(200).json({ message: "Bug deleted", id: deletedBug.id });
}) as RequestHandler);

export default router;
