# Rules for this repo
- Always work on the main branch. Never create new branches.
- After every change: git add -A (this includes new untracked files), commit with a clear message, then git push origin main.
- Before saying a task is done, run git status and show that it reports "nothing to commit, working tree clean".
- Then run git log origin/main --oneline -1 and show the output to prove the push landed.
- If the site can't be built here, say so clearly and list every file changed.
- Commits must use the same author name and email as commit 4ac924d. Vercel blocks commits from any other author.
