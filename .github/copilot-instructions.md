<!-- GitHub Copilot / AI agent instructions for the "clases_particulares" repo -->

This repository currently contains only a Git history and an empty `README` at the project root.

Goal for an AI coding agent
- Help the human owner make the repo productive by identifying missing pieces, proposing a minimal scaffold, and creating clear, runnable starter files (project manifest, README content, simple example code and tests) when asked.

What I need to know before making changes
- This repo currently has no source files or manifests. Any scaffolding should be conservative and reversible: create a clear single-commit scaffold and include a short README describing what was added and why.
- Prefer to ask the user before choosing a language/framework. If no preference is provided, propose a minimal, commonly-used stack (for example: Node.js + TypeScript or Python 3.11) and explain the tradeoffs.

Repository-specific facts (discoverable)
- Top-level: `.git/` and `README` (empty). There are no package manifests, build files, or source directories to inspect.

Actionable guidance for common tasks
- If asked to add a new feature or project scaffold:
  - Create a small, self-contained scaffold: a `README.md` with project purpose, a minimal `LICENSE` if requested, a manifest (`package.json` or `pyproject.toml`), a `src/` folder with one example module, and a `tests/` folder with one unit test.
  - Include clear "how to run" commands in the README that use the user's OS shell (Windows PowerShell is detected). Use cross-platform commands where practical.
  - Keep commits small and explain each commit in the commit message.

- If the user asks to detect project type automatically, first search for common manifest files (`package.json`, `pyproject.toml`, `requirements.txt`, `setup.py`, `Pipfile`, `Cargo.toml`, `Gemfile`, `pom.xml`). If none are found, report back that the repo is empty and offer scaffolding options.

Conventions for edits and PRs
- Prefer minimal changes that are easy to review. When scaffolding, create a single top-level directory (`src/`) and avoid nesting more than one level unless requested.
- When adding code, include at least one test and corresponding run instructions. Use widely-supported test frameworks (pytest for Python, jest for Node.js) unless the user prefers otherwise.

Examples (how to scaffold when asked)
- Node.js + TypeScript minimal scaffold:
  - Add `package.json`, `tsconfig.json`, `src/index.ts`, `tests/index.test.ts`, and README run steps using `npm install` and `npm test`.
- Python minimal scaffold:
  - Add `pyproject.toml` (poetry or minimal build-system), `src/` package, `tests/test_basic.py`, and README run steps using `python -m pytest`.

When to ask the user
- If the task requires choosing a language, framework, deployment target, or license and the user hasn't specified a preference.
- If the repo already contains code and requested changes risk breaking behavior (not applicable now, but check for code before changing).

Files to reference when present
- `README` — top-level project description (currently empty).
- `.git/` — repository history (do not modify directly).

If you (human) are reading this
- Tell the agent which language/framework you prefer and whether you want a minimal demo app, tests, CI config, or a full app skeleton.

Questions for the owner
- Do you want me to scaffold a minimal project? If yes, which language/framework do you prefer?

End of file
