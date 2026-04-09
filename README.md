# Mastra Minimal Reproduction

This repository is a stripped-down Mastra app intended to reproduce a bug with the least amount of code possible, following Mastra's [minimal reproduction guidance](https://github.com/mastra-ai/mastra/blob/main/CONTRIBUTING.md#minimal-reproduction).

## Status

This repo is scaffolded and ready for the issue-specific reproduction code.

Update the placeholders below before filing the upstream GitHub issue:

- Replace the code in `src/mastra` with only the logic required to trigger the bug.
- Fill in the expected and actual behavior sections.
- Add the exact command, request, or action that triggers the failure.
- If the issue needs extra Mastra packages or external services, document only those.

## Expected Behavior

[Describe what should happen.]

## Actual Behavior

[Describe the error, incorrect output, or unexpected behavior.]

## Reproduction Steps

1. Install dependencies:

```sh
npm install
```

2. Configure environment variables:

```sh
cp .env.example .env
```

3. Start the Mastra dev server:

```sh
npm run dev
```

4. Trigger the issue:

```text
[Document the exact command, HTTP request, UI action, or tool invocation here.]
```

## Project Structure

- `src/mastra/index.ts`: minimal Mastra entrypoint
- `.env.example`: example environment variables

## Environment

- Node.js: `v25.8.1`
- Package manager: `npm`
- OS: `macOS / Darwin 25.3.0 arm64`

## Notes

- This repo intentionally starts with the smallest possible Mastra app.
- Add only the Mastra packages and configuration needed to reproduce the issue.
- Avoid unrelated business logic, extra UI, or environment-specific setup.
