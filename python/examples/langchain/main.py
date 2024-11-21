from dotenv import load_dotenv

from langchain_openai import ChatOpenAI

from langgraph.prebuilt import create_react_agent

from exfunc_agent_toolkit.langchain.toolkit import ExfuncAgentToolkit

load_dotenv()

llm = ChatOpenAI(
    model="gpt-4o-mini",
)

exfunc_agent_toolkit = ExfuncAgentToolkit()

tools = []
tools.extend(exfunc_agent_toolkit.get_tools())

langgraph_agent_executor = create_react_agent(llm, tools)

example_query = "What is the website URL of Exfunc?"

events = langgraph_agent_executor.stream(
    {"messages": [("user", example_query)]},
    stream_mode="values",
)
for event in events:
    event["messages"][-1].pretty_print()
