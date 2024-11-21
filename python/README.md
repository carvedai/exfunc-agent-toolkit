# Exfunc Agent Toolkit - Python

The Exfunc Agent Toolkit library enables popular agent frameworks such as LangChain to integrate with Exfunc APIs through function calling. The
library is not exhaustive of the entire Exfunc API. It is built directly on top
of the [Exfunc Python SDK][python-sdk].

## Installation

You don't need this source code unless you want to modify the package. If you just
want to use the package, just run:

```sh
pip install exfunc-agent-toolkit
```

### Requirements

- Python 3.11+

## Usage

The library needs to be configured with your account's API key which is
available in your [Exfunc Dashboard][api-keys].

```python
from exfunc_agent_toolkit.langchain.toolkit import ExfuncAgentToolkit

exfunc_agent_toolkit = ExfuncAgentToolkit(
    api_key=os.environ.get("EXFUNC_API_KEY"),  # This is the default and can be omitted
)
```

The toolkit works with LangChain can be passed as a list of tools. For example:

```python
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

llm = ChatOpenAI(model="gpt-4o-mini")

tools = []
tools.extend(exfunc_agent_toolkit.get_tools())

langgraph_agent_executor = create_react_agent(llm, tools)
```

Example for LangChain is included in `/examples`.

[python-sdk]: https://github.com/carvedai/exfunc-py
[api-keys]: https://app.exfunc.com/dashboard

## Development

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
