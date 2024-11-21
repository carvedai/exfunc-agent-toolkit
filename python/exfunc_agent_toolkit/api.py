"""Util that calls Exfunc."""

from __future__ import annotations

import os
from pydantic import BaseModel, ConfigDict, model_validator
from typing import Any, Dict


class ExfuncAPI(BaseModel):
    """Wrapper for Exfunc API"""

    exfunc: Any = None  #: :meta private:
    exfunc_api_key: str

    model_config = ConfigDict(
        extra="forbid",
    )

    @model_validator(mode="before")
    @classmethod
    def validate_environment(cls, values: Dict) -> Any:
        """Validate that api key exists in environment."""
        api_key = values.get("exfunc_api_key")
        env_api_key = os.environ.get("EXFUNC_API_KEY")
        if api_key:
            values["exfunc_api_key"] = api_key
        elif env_api_key:
            values["exfunc_api_key"] = env_api_key
        else:
            raise ValueError(
                "Did not find EXFUNC_API_KEY, please add an environment variable"
            )

        try:
            import exfunc

        except ImportError:
            raise ImportError(
                "exfunc is not installed. Please install it with `pip install -U exfunc`"
            )

        values["exfunc"] = exfunc.Exfunc(api_key=values["exfunc_api_key"])
        return values

    def run(self, method: str, **kwargs) -> str:
        """Execute the specified method and return the JSON response."""
        method_map = {
            "google_get_product": self.exfunc.google.get_product,
            "google_get_product_reviews": self.exfunc.google.get_product_reviews,
            "google_search_news": self.exfunc.google.search_news,
            "google_search_products": self.exfunc.google.search_products,
            "google_search_web": self.exfunc.google.search_web,
            "linkedin_get_company": self.exfunc.linkedin.get_company,
            "linkedin_get_job_posting": self.exfunc.linkedin.get_job_posting,
            "linkedin_get_person": self.exfunc.linkedin.get_person,
            "linkedin_search_companies": self.exfunc.linkedin.search_companies,
            "linkedin_search_job_postings": self.exfunc.linkedin.search_job_postings,
            "linkedin_search_people": self.exfunc.linkedin.search_people,
            "navigator_scrape": self.exfunc.navigator.scrape,
            "skyscanner_search_flights": self.exfunc.skyscanner.search_flights,
            "twitter_get_tweet": self.exfunc.twitter.get_tweet,
            "twitter_get_user_followers": self.exfunc.twitter.get_user_followers,
            "twitter_get_user_followings": self.exfunc.twitter.get_user_followings,
            "twitter_get_user": self.exfunc.twitter.get_user,
            "twitter_get_user_tweets": self.exfunc.twitter.get_user_tweets,
            "twitter_search_tweets": self.exfunc.twitter.search_tweets,
            "twitter_search_users": self.exfunc.twitter.search_users,
            "yelp_get_business": self.exfunc.yelp.get_business,
            "yelp_get_business_reviews": self.exfunc.yelp.get_business_reviews,
            "yelp_search_businesses": self.exfunc.yelp.search_businesses,
            "zillow_get_property": self.exfunc.zillow.get_property,
            "zillow_search_properties": self.exfunc.zillow.search_properties,
        }

        if method in method_map:
            response = method_map[method](request=kwargs)
            return response.json()
        else:
            raise ValueError(f"Invalid method: {method}")
