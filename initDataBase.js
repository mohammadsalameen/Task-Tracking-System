import sql from "better-sqlite3";

const db = sql("tasks.db");

const dummyTasks = [
  {
    id: 1,
    title: "Complete Next.js project",
    slug: "complete-nextjs-project",
    description: "Finish the task tracking application using Next.js 15.",
    completed: false,
    created_at: "2025-03-01T10:30:00Z",
    updated_at: "2025-03-01T12:00:00Z",
  },
  {
    id: 2,
    title: "Review PRs on GitHub",
    slug: "review-prs-on-github",
    description: "Check and review the pull requests for the team project.",
    completed: true,
    created_at: "2025-02-28T15:45:00Z",
    updated_at: "2025-02-28T18:20:00Z",
  },
  {
    id: 3,
    title: "Fix authentication bug",
    slug: "fix-authentication-bug",
    description: "Debug and resolve the issue with user login authentication.",
    completed: false,
    created_at: "2025-03-02T08:15:00Z",
    updated_at: "2025-03-02T09:50:00Z",
  },
  {
    id: 4,
    title: "Write API documentation",
    slug: "write-api-documentation",
    description:
      "Document all API endpoints and their responses for the backend service.",
    completed: true,
    created_at: "2025-02-25T14:00:00Z",
    updated_at: "2025-02-26T10:30:00Z",
  },
  {
    id: 5,
    title: "Prepare for team meeting",
    slug: "prepare-for-team-meeting",
    description:
      "Create a presentation covering progress and blockers for the weekly sync-up.",
    completed: false,
    created_at: "2025-03-01T17:20:00Z",
    updated_at: "2025-03-01T19:10:00Z",
  },
];

db.prepare(
  `CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY  AUTOINCREMENT, 
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    completed BOOLEAN NOT NULL,
    created_at TEXT,
    updated_at TEXT)`
).run();


const insertDate = () =>{
    const insertCommand = db.prepare(`
        INSERT INTO tasks VALUES(@id, @title, @slug, @description, @completed, @created_at, @updated_at)`)

        for(const tasks of dummyTasks){
            insertCommand.run(tasks);
        }
}

insertDate();