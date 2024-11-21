import unittest
from unittest.mock import Mock

from exfunc_agent_toolkit.api import ExfuncAPI


class TestExfuncAPI(unittest.TestCase):
    def setUp(self):
        self.mock_instance = ExfuncAPI(exfunc_api_key="test-api-key")
        self.mock_instance.exfunc = Mock()
        self.mock_instance.exfunc.google = Mock()

    def test_google_search_web(self):
        mock_result = [
            {
                "title": "Exfunc",
                "url": "https://www.exfunc.com/",
                "domain": "www.exfunc.com",
            }
        ]

        mock_response = Mock()
        mock_response.json.return_value = mock_result
        self.mock_instance.exfunc.google.search_web.return_value = (
            mock_response
        )

        result = self.mock_instance.run(
            "google_search_web", query="exfunc website", count=1
        )
        self.assertEqual(result, mock_result)
