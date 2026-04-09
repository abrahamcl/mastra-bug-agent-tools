# Mastra Minimal Reproduction

This repro shows that TypeScript accepts an invalid `AgentConfig.tools` value that should be rejected.

The invalid case is in [src/tools-runtime-crash.test.ts](/Users/abraham/Documents/GitHub/mastra-bug-agent-tools/src/tools-runtime-crash.test.ts), where a static `tools` map contains `myTool: () => realTool`. That nested resolver function should be a type error, but it compiles.

## Reproduction

```sh
npm install
npx tsc --noEmit
```

Expected: TypeScript reports an error for `myTool: () => realTool`.

Actual: `tsc` exits successfully with no type error.

To show that an actual runtime crash occurs when using the invalid config, run:

```sh
npm run test
```