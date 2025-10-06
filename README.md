# Exfunc Agent Toolkit

The Exfunc Agent Toolkit enables popular agent frameworks including LangChain and Vercel's AI SDK, to integrate with Exfunc APIs through function calling. The
library is not exhaustive of the entire Exfunc API. It includes support for both Python and TypeScript and is built directly on top of the Exfunc [Python][python-sdk] and [Node][node-sdk] SDKs.

The toolkit was inspired by [Stripe Agent Toolkit][stripe-agent-toolkit], and its implementation shares similarities with the Stripe Agent Toolkit codebase.

Included below are basic instructions, but refer to the [Python](/python) and [TypeScript](/typescript) packages for more information. Also, check out our [documentation][docs].

## Python

### Installation

You don't need this source code unless you want to modify the package. If you just
want to use the package run:

```sh
pip install exfunc-agent-toolkit
```

#### Requirements

- Python 3.11+

### Usage

The library needs to be configured with your account's secret key which is
available in your [Exfunc Dashboard][api-keys].

```python
from exfunc_agent_toolkit.crewai.toolkit import ExfuncAgentToolkit

exfunc_agent_toolkit = ExfuncAgentToolkit(
    api_key=os.environ.get("EXFUNC_API_KEY"),  # This is the default and can be omitted
)
```

The toolkit works with LangChain and can be passed as a list of tools. For example:

```python
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

llm = ChatOpenAI(model="gpt-4o-mini")

tools = exfunc_agent_toolkit.get_tools()

langgraph_agent_executor = create_react_agent(llm, tools)
```

Example for LangChain is included in [/examples](/python/examples).

## TypeScript

### Installation

You don't need this source code unless you want to modify the package. If you just
want to use the package run:

```
npm install @exfunc/agent-toolkit
```

#### Requirements

- Node 18+

### Usage

The library needs to be configured with your account's secret key which is available in your [Exfunc Dashboard][api-keys]. Additionally, `configuration` enables you to specify the types of actions that can be taken using the toolkit.

```typescript
import {ExfuncAgentToolkit} from "@exfunc/agent-toolkit/langchain";

const exfuncAgentToolkit = new ExfuncAgentToolkit({
  apiKey: process.env.EXFUNC_API_KEY ?? "",  // This is the default and can be omitted
});
```

#### Tools

The toolkit works with LangChain and Vercel's AI SDK and can be passed as a list of tools. For example:

```typescript
import {createReactAgent} from '@langchain/langgraph/prebuilt';

const tools = exfuncAgentToolkit.getTools();

const agent = await createReactAgent({
  llm,
  tools,
});
```

## Agent Demo

https://github.com/user-attachments/assets/80c4ed26-69f7-49d2-a75e-307d9da4f5df

[docs]: https://docs.exfunc.dev
[python-sdk]: https://github.com/carvedai/exfunc-py
[node-sdk]: https://github.com/carvedai/exfunc-js
[api-keys]: https://app.exfunc.dev/dashboard
[stripe-agent-toolkit]: https://github.com/stripe/agent-toolkit
