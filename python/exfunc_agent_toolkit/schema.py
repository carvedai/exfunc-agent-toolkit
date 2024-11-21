"""Exfunc Schema."""

import exfunc

from typing import List, Optional

from pydantic import BaseModel, Field


class GoogleGetProduct(BaseModel):
    product_id: str = Field(..., description=r"""The ID of the product to retrieve""")
    country_code: Optional[str] = Field(None, description=r"""The country code for the product""")


class GoogleGetProductReviews(BaseModel):
    product_id: str = Field(..., description=r"""The ID of the product for which to retrieve reviews""")
    country_code: Optional[str] = Field(None, description=r"""The country code for the reviews""")
    per_page: Optional[int] = Field(None, description=r"""Number of reviews to return per page (default is 10)""")


class GoogleSearchNews(BaseModel):
    query: str = Field(..., description=r"""The search query for news articles""")
    country_code: Optional[str] = Field(None, description=r"""The country code for filtering news""")
    per_page: Optional[int] = Field(None, description=r"""Number of news articles to return per page (default is 10)""")
    time_published: Optional[exfunc.models.TimePublished] = Field(
        None, description=r"""Filter news articles published after this date"""
    )


class GoogleSearchProducts(BaseModel):
    query: str = Field(..., description=r"""The search query for products""")
    country_code: Optional[str] = Field(None, description=r"""The country code for filtering products""")
    page: Optional[int] = Field(None, description=r"""Page number for pagination (default is 1)""")
    per_page: Optional[int] = Field(None, description=r"""Number of products to return per page (default is 10)""")
    sort_by: Optional[exfunc.models.SortBy] = Field(None, description=r"""Sort the results by a specific field""")
    product_condition: Optional[exfunc.models.ProductCondition] = Field(None, description=r"""Filter products by condition""")


class GoogleSearchWeb(BaseModel):
    query: str = Field(..., description=r"""The search query""")
    count: Optional[int] = Field(None, description=r"""Maximum number of search results to return (default is 10)""")


class LinkedinGetCompany(BaseModel):
    company_url: str = Field(..., description=r"""The LinkedIn URL of the company to enrich""")


class LinkedinGetJobPosting(BaseModel):
    job_posting_url: str = Field(..., description=r"""The LinkedIn URL of the job posting to enrich""")


class LinkedinGetPerson(BaseModel):
    person_url: str = Field(..., description=r"""The URL of the person to enrich""")


class LinkedinSearchCompanies(BaseModel):
    name: Optional[str] = Field(None, description=r"""The name of the company to search for""")
    locations: Optional[List[str]] = Field(None, description=r"""List of locations to filter the search""")
    sizes: Optional[List[exfunc.models.LinkedInCompanySize]] = Field(
        None, description=r"""List of company sizes to filter the search"""
    )
    industries: Optional[List[exfunc.models.LinkedInCompanyIndustry]] = Field(
        None, description=r"""List of industry tags to filter the search"""
    )
    page: Optional[int] = Field(None, description=r"""Page number for pagination (default is 1)""")


class LinkedinSearchJobPostings(BaseModel):
    keywords: str = Field(..., description=r"""Keywords to search for in job postings""")
    location: Optional[str] = Field(None, description=r"""Location to filter job postings""")
    date_posted: Optional[exfunc.models.DatePosted] = Field(
        None, description=r"""Filter for job postings based on when they were posted"""
    )
    salary: Optional[exfunc.models.Salary] = Field(None, description=r"""Salary range to filter job postings""")
    job_type: Optional[exfunc.models.JobType] = Field(None, description=r"""Job type to filter (e.g., Full-time, Part-time)""")
    work_type: Optional[exfunc.models.WorkType] = Field(None, description=r"""Work type to filter (e.g., Remote, On-site)""")
    experience_level: Optional[exfunc.models.ExperienceLevel] = Field(
        None, description=r"""Experience level to filter (e.g., Associate, Executive)"""
    )
    company_uids: Optional[List[str]] = Field(None, description=r"""List of company unique identifiers to filter""")
    sort_by: Optional[exfunc.models.SearchJobPostingsSortBy] = Field(None, description=r"""The criteria to sort results""")
    page: Optional[int] = Field(None, description=r"""Page number for pagination (default is 1)""")


class LinkedinSearchPeople(BaseModel):
    keywords: str = Field(..., description=r"""Keywords to search for in people profiles""")
    locations: Optional[List[str]] = Field(None, description=r"""List of locations to filter the search""")
    titles: Optional[List[str]] = Field(None, description=r"""List of job titles to filter the search""")
    seniorities: Optional[List[exfunc.models.Seniorities]] = Field(
        None, description=r"""List of seniority levels to filter the search"""
    )
    company_sizes: Optional[List[exfunc.models.LinkedInCompanySize]] = Field(
        None, description=r"""List of company size ranges to filter the search"""
    )
    company_industries: Optional[List[exfunc.models.LinkedInCompanyIndustry]] = Field(
        None, description=r"""List of company industry tags to filter the search"""
    )
    company_domains: Optional[List[str]] = Field(None, description=r"""List of company domains to filter the search""")
    page: Optional[int] = Field(None, description=r"""Page number for pagination (default is 1)""")


class NavigatorScrape(BaseModel):
    url: str = Field(..., description=r"""The URL to start navigating from""")


class SkyscannerSearchFlights(BaseModel):
    origin: str = Field(..., description=r"""The origin location of the itinerary""")
    destination: str = Field(..., description=r"""The destination location of the itinerary""")
    flight_type: exfunc.models.FlightType = Field(..., description=r"""The type of the flight""")
    depart_date: str = Field(
        ..., description=r"""The departure date of the itinerary. The format has to be YYYY-MM-DD"""
    )
    return_date: Optional[str] = Field(
        None,
        description=r"""The return date of the itinerary. The format has to be YYYY-MM-DD. If the flight type is roundtrip, this field is required.""",
    )
    stops: Optional[List[exfunc.models.Stops]] = Field(None, description=r"""The list of filter values for number of stops""")
    num_adults: Optional[float] = Field(1, description=r"""The number of adults for the itinerary""")
    num_children: Optional[float] = Field(0, description=r"""The number of children for the itinerary""")
    num_infants: Optional[float] = Field(0, description=r"""The number of infants for the itinerary""")
    cabin_class: Optional[exfunc.models.CabinClass] = Field(None, description=r"""The cabin class filter""")
    include_origin_nearby_airports: Optional[bool] = Field(
        False, description=r"""Boolean to indicate whether to include nearby origin airports in the results or not"""
    )
    include_destination_nearby_airports: Optional[bool] = Field(
        False,
        description=r"""Boolean to indicate whether to include nearby destination airports in the results or not""",
    )


class TwitterGetTweet(BaseModel):
    tweet_id: str = Field(..., description=r"""The ID of the tweet to retrieve""")


class TwitterGetUserFollowers(BaseModel):
    username: str = Field(..., description=r"""The username of the Twitter user whose followers to retrieve""")
    count: Optional[int] = Field(None, description=r"""The number of followers to retrieve""")


class TwitterGetUserFollowings(BaseModel):
    username: str = Field(..., description=r"""The username of the Twitter user whose followings to retrieve""")
    count: Optional[int] = Field(None, description=r"""The number of followings to retrieve""")


class TwitterGetUser(BaseModel):
    user_id: Optional[str] = Field(None, description=r"""The ID of the Twitter user to retrieve""")
    username: Optional[str] = Field(None, description=r"""The username of the Twitter user to retrieve""")


class TwitterGetUserTweets(BaseModel):
    username: str = Field(..., description=r"""The username of the Twitter user whose tweets to retrieve""")
    count: Optional[int] = Field(None, description=r"""The number of tweets to retrieve""")


class TwitterSearchTweets(BaseModel):
    query: str = Field(..., description=r"""The search query string""")
    type: Optional[exfunc.models.Type] = Field(None, description=r"""The type of search""")
    count: Optional[int] = Field(None, description=r"""The number of results to retrieve""")


class TwitterSearchUsers(BaseModel):
    query: str = Field(..., description=r"""The search query string""")
    count: Optional[int] = Field(None, description=r"""The number of results to retrieve""")


class YelpGetBusiness(BaseModel):
    business_id: str = Field(..., description=r"""The ID of the business to retrieve reviews for""")


class YelpGetBusinessReviews(BaseModel):
    business_id: str = Field(..., description=r"""The ID of the business to retrieve reviews for""")
    sort_by: Optional[exfunc.models.GetBusinessReviewsSortBy] = Field(
        None, description=r"""The criteria to sort reviews (e.g., \\"best_match\\", \\"newest\\", etc.)"""
    )
    page: Optional[int] = Field(None, description=r"""The page number of results to retrieve (default is 1)""")
    per_page: Optional[int] = Field(None, description=r"""The number of reviews to retrieve per page (default is 10)""")


class YelpSearchBusinesses(BaseModel):
    query: str = Field(..., description=r"""The search term to find businesses""")
    location: str = Field(..., description=r"""The location to search for businesses""")
    sort_by: Optional[exfunc.models.SearchBusinessesSortBy] = Field(
        None, description=r"""The criteria to sort the results (e.g., \\"recommended\\", \\"highest_rated\\", etc.)"""
    )
    start: Optional[int] = Field(None, description=r"""The starting index for pagination (default is 0)""")


class ZillowGetProperty(BaseModel):
    property_id: str = Field(..., description=r"""The ID of the property""")


class ZillowSearchProperties(BaseModel):
    location: str = Field(..., description=r"""The location to search for properties""")
    listing_status: exfunc.models.ListingStatus = Field(
        ..., description=r"""The status of the listings (e.g., \\"for_sale\\", \\"for_rent\\")"""
    )
    sort_by: Optional[exfunc.models.SearchPropertiesSortBy] = Field(
        None, description=r"""The criteria to sort the results (e.g., \\"newest\\", \\"lot_size\\")"""
    )
    page: Optional[int] = Field(None, description=r"""The page number of results to retrieve""")
    min_listing_price: Optional[float] = Field(None, description=r"""The minimum listing price for the properties""")
    max_listing_price: Optional[float] = Field(None, description=r"""The maximum listing price for the properties""")
    min_num_bedrooms: Optional[exfunc.models.MinNumBedrooms] = Field(None, description=r"""The minimum number of bedrooms""")
    max_num_bedrooms: Optional[exfunc.models.MaxNumBedrooms] = Field(None, description=r"""The maximum number of bedrooms""")
