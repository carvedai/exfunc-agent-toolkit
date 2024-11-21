"""
This tool allows agents to interact with the Exfunc API.
"""

from __future__ import annotations

from typing import Any, Optional, Type
from pydantic import BaseModel

from langchain.tools import BaseTool

from ..api import ExfuncAPI


class ExfuncTool(BaseTool):
    """Tool for interacting with the Exfunc API."""

    exfunc_api: ExfuncAPI
    method: str
    name: str = ""
    description: str = ""
    args_schema: Optional[Type[BaseModel]] = None

    def _run(
        self,
        **kwargs: Any,
    ) -> str:
        """Use the Exfunc API to run an operation."""
        return self.exfunc_api.run(self.method, **kwargs)
