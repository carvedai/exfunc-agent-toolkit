# Exfunc Agent Toolkit - TypeScript

The Exfunc Agent Toolkit enables popular agent frameworks including LangChain and Vercel's AI SDK to integrate with Exfunc APIs through function calling.

## Installation

You don't need this source code unless you want to modify the package. If you just
want to use the package run:

```
npm install @exfunc/agent-toolkit
```

### Requirements

- Node 18+

## Usage

The library needs to be configured with your account's secret key which is available in your [Exfunc Dashboard][api-keys]. Additionally, `configuration` enables you to specify the types of actions that can be taken using the toolkit.

```typescript
import {ExfuncAgentToolkit} from '@exfunc/agent-toolkit/langchain';

const exfuncAgentToolkit = new ExfuncAgentToolkit();
```

### Tools

The toolkit works with LangChain and Vercel's AI SDK and can be passed as a list of tools. For example:

```typescript
import {createReactAgent} from '@langchain/langgraph/prebuilt';

const tools = exfuncAgentToolkit.getTools();

const agent = await createReactAgent({
  llm,
  tools,
});
```

This works with both `generateText` and `generateStream` from the Vercel AI SDK.

[node-sdk]: https://github.com/carvedai/exfunc-js
[api-keys]: https://app.exfunc.com/dashboard
