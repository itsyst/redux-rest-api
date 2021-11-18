import express, { Request, Response } from "express"
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

interface Bug {
  id: number,
  description: string,
  resolved: boolean,
  userId?: number,
}

const bugs: Bug[] = [
  { id: 1, description: "Bug 1", userId: 1, resolved: true },
  { id: 2, description: "Bug 2", userId: 1, resolved: false },
  { id: 3, description: "Bug 3", userId: 2, resolved: false },
  { id: 4, description: "Bug 4", resolved: false }
];

app.get("/api/bugs", (req: Request, res: Response) => {
  res.json(bugs);
});

app.post("/api/bugs", (req: Request, res: Response) => {
  const bug = { id: Date.now(), resolved: false, ...req.body };
  bugs.push(bug);

  res.json(bug);
});

app.get("/api/bugs/:id", (req: Request, res: Response) => {
  const index = bugs.findIndex(bug => bug.id === parseInt(req.params.id));
  const bug = bugs[index];
  res.json(bug);
});

app.patch("/api/bugs/:id", (req: Request, res: Response) => {
  const index = bugs.findIndex(bug => bug.id === parseInt(req.params.id));
  const bug = bugs[index];
  if ("resolved" in req.body) bug.resolved = req.body.resolved;
  if ("userId" in req.body) bug.userId = req.body.userId;

  res.json(bug);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);



