import { Agent } from "@mastra/core/agent";
import { describe, expect, it } from "vitest";
import type { AgentConfig } from "@mastra/core/agent";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const realTool = createTool({
  id: "real-tool",
  description: "A valid Mastra tool object",
  inputSchema: z.object({}),
  execute: async () => {
    return { ok: true };
  },
});

const baseConfig: AgentConfig = {
  id: "test-agent",
  name: "test-agent",
  instructions: {
    role: "system" as const,
    content: "test",
  },
  model: {} as any,
};

const invalidNestedResolverConfig: AgentConfig = {
  ...baseConfig,
  tools: {
    // This should be a type error because `tools` is being used as a static map,
    // so each value should already be a tool object.
    //
    // Today this compiles because `ProviderDefinedTool` has `[key: string]: any`,
    // which makes a bare function structurally assignable through the union.
    myTool: () => realTool,
  },
};

const validConfig: AgentConfig = {
  ...baseConfig,
  tools: () => ({
    myTool: realTool,
  }),
};

describe("Agent tools runtime repro", () => {
  it("crashes when a static tools map contains a nested resolver function", () => {
    const agent = new Agent(invalidNestedResolverConfig);

    // Intentionally uncaught: this demonstrates the runtime failure mode.
    agent.listTools();
  });

  it("does not crash when tools are provided via a resolver function", () => {
    const agent = new Agent(validConfig);

    // This should not throw, and should return the expected tools.
    const tools = agent.listTools();
    expect(tools).toEqual({ myTool: realTool });
  });
});
