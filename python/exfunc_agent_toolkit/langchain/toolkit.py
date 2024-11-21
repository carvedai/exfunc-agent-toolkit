"""Exfunc Agent Toolkit."""

from typing import List
from pydantic import PrivateAttr

from ..api import ExfuncAPI
from ..tools import tools
from .tool import ExfuncTool


class ExfuncAgentToolkit:
    _tools: List = PrivateAttr(default=[])

    def __init__(self, api_key=None):
        super().__init__()

        exfunc_api = ExfuncAPI(exfunc_api_key=api_key)

        self._tools = [
            ExfuncTool(
                name=tool["method"],
                description=tool["description"],
                method=tool["method"],
                exfunc_api=exfunc_api,
                args_schema=tool.get("args_schema", None),
            )
            for tool in tools
        ]

    def get_tools(self) -> List:
        """Get the tools in the toolkit."""
        return self._tools
