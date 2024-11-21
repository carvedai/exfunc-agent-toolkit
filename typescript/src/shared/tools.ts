import {
  GOOGLE_GET_PRODUCT_PROMPT,
  GOOGLE_GET_PRODUCT_REVIEWS_PROMPT,
  GOOGLE_SEARCH_NEWS_PROMPT,
  GOOGLE_SEARCH_PRODUCTS_PROMPT,
  GOOGLE_SEARCH_WEB_PROMPT,
  LINKEDIN_GET_COMPANY_PROMPT,
  LINKEDIN_GET_JOB_POSTING_PROMPT,
  LINKEDIN_GET_PERSON_PROMPT,
  LINKEDIN_SEARCH_COMPANIES_PROMPT,
  LINKEDIN_SEARCH_JOB_POSTINGS_PROMPT,
  LINKEDIN_SEARCH_PEOPLE_PROMPT,
  NAVIGATOR_SCRAPE_PROMPT,
  SKYSCANNER_SEARCH_FLIGHTS_PROMPT,
  TWITTER_GET_TWEET_PROMPT,
  TWITTER_GET_USER_PROMPT,
  TWITTER_GET_USER_FOLLOWERS_PROMPT,
  TWITTER_GET_USER_FOLLOWINGS_PROMPT,
  TWITTER_GET_USER_TWEETS_PROMPT,
  TWITTER_SEARCH_TWEETS_PROMPT,
  TWITTER_SEARCH_USERS_PROMPT,
  YELP_GET_BUSINESS_PROMPT,
  YELP_GET_BUSINESS_REVIEWS_PROMPT,
  YELP_SEARCH_BUSINESSES_PROMPT,
  ZILLOW_GET_PROPERTY_PROMPT,
  ZILLOW_SEARCH_PROPERTIES_PROMPT,
} from './prompts';

import {SearchWebRequestBody$inboundSchema} from 'exfunc/models/operations/searchweb';
import {SearchBusinessesRequestBody$inboundSchema} from 'exfunc/models/operations/searchbusinesses';
import {SearchCompaniesRequestBody$inboundSchema} from 'exfunc/models/operations/searchcompanies';
import {SearchJobPostingsRequestBody$inboundSchema} from 'exfunc/models/operations/searchjobpostings';
import {SearchPeopleRequestBody$inboundSchema} from 'exfunc/models/operations/searchpeople';
import {SearchProductsRequestBody$inboundSchema} from 'exfunc/models/operations/searchproducts';
import {SearchPropertiesRequestBody$inboundSchema} from 'exfunc/models/operations/searchproperties';
import {SearchTweetsRequestBody$inboundSchema} from 'exfunc/models/operations/searchtweets';
import {SearchUsersRequestBody$inboundSchema} from 'exfunc/models/operations/searchusers';
import {ScrapeRequestBody$inboundSchema} from 'exfunc/models/operations/scrape';
import {SearchFlightsRequestBody$inboundSchema} from 'exfunc/models/operations/searchflights';
import {SearchNewsRequestBody$inboundSchema} from 'exfunc/models/operations/searchnews';
import {GetBusinessRequestBody$inboundSchema} from 'exfunc/models/operations/getbusiness';
import {GetBusinessReviewsRequestBody$inboundSchema} from 'exfunc/models/operations/getbusinessreviews';
import {GetCompanyRequestBody$inboundSchema} from 'exfunc/models/operations/getcompany';
import {GetJobPostingRequestBody$inboundSchema} from 'exfunc/models/operations/getjobposting';
import {GetPersonRequestBody$inboundSchema} from 'exfunc/models/operations/getperson';
import {GetProductRequestBody$inboundSchema} from 'exfunc/models/operations/getproduct';
import {GetProductReviewsRequestBody$inboundSchema} from 'exfunc/models/operations/getproductreviews';
import {GetPropertyRequestBody$inboundSchema} from 'exfunc/models/operations/getproperty';
import {GetTweetRequestBody$inboundSchema} from 'exfunc/models/operations/gettweet';
import {GetUserRequestBody$inboundSchema} from 'exfunc/models/operations/getuser';
import {GetUserFollowersRequestBody$inboundSchema} from 'exfunc/models/operations/getuserfollowers';
import {GetUserFollowingsRequestBody$inboundSchema} from 'exfunc/models/operations/getuserfollowings';
import {GetUserTweetsRequestBody$inboundSchema} from 'exfunc/models/operations/getusertweets';

export type Tool = {
  method: string;
  name: string;
  description: string;
  parameters: any;
};

const tools: Tool[] = [
  {
    method: 'google_search_web',
    name: 'Google Search Web',
    description: GOOGLE_SEARCH_WEB_PROMPT,
    parameters: SearchWebRequestBody$inboundSchema,
  },
  {
    method: 'google_get_product',
    name: 'Google Get Product',
    description: GOOGLE_GET_PRODUCT_PROMPT,
    parameters: GetProductRequestBody$inboundSchema,
  },
  {
    method: 'google_get_product_reviews',
    name: 'Google Get Product Reviews',
    description: GOOGLE_GET_PRODUCT_REVIEWS_PROMPT,
    parameters: GetProductReviewsRequestBody$inboundSchema,
  },
  {
    method: 'google_search_news',
    name: 'Google Search News',
    description: GOOGLE_SEARCH_NEWS_PROMPT,
    parameters: SearchNewsRequestBody$inboundSchema,
  },
  {
    method: 'google_search_products',
    name: 'Google Search Products',
    description: GOOGLE_SEARCH_PRODUCTS_PROMPT,
    parameters: SearchProductsRequestBody$inboundSchema,
  },
  {
    method: 'google_search_web',
    name: 'Google Search Web',
    description: GOOGLE_SEARCH_WEB_PROMPT,
    parameters: SearchWebRequestBody$inboundSchema,
  },
  {
    method: 'linkedin_get_company',
    name: 'LinkedIn Get Company',
    description: LINKEDIN_GET_COMPANY_PROMPT,
    parameters: GetCompanyRequestBody$inboundSchema,
  },
  {
    method: 'linkedin_get_job_posting',
    name: 'LinkedIn Get Job Posting',
    description: LINKEDIN_GET_JOB_POSTING_PROMPT,
    parameters: GetJobPostingRequestBody$inboundSchema,
  },
  {
    method: 'linkedin_get_person',
    name: 'LinkedIn Get Person',
    description: LINKEDIN_GET_PERSON_PROMPT,
    parameters: GetPersonRequestBody$inboundSchema,
  },
  {
    method: 'linkedin_search_companies',
    name: 'LinkedIn Search Companies',
    description: LINKEDIN_SEARCH_COMPANIES_PROMPT,
    parameters: SearchCompaniesRequestBody$inboundSchema,
  },
  {
    method: 'linkedin_search_job_postings',
    name: 'LinkedIn Search Job Postings',
    description: LINKEDIN_SEARCH_JOB_POSTINGS_PROMPT,
    parameters: SearchJobPostingsRequestBody$inboundSchema,
  },
  {
    method: 'linkedin_search_people',
    name: 'LinkedIn Search People',
    description: LINKEDIN_SEARCH_PEOPLE_PROMPT,
    parameters: SearchPeopleRequestBody$inboundSchema,
  },
  {
    method: 'navigator_scrape',
    name: 'Navigator Scrape',
    description: NAVIGATOR_SCRAPE_PROMPT,
    parameters: ScrapeRequestBody$inboundSchema,
  },
  {
    method: 'skyscanner_search_flights',
    name: 'Skyscanner Search Flights',
    description: SKYSCANNER_SEARCH_FLIGHTS_PROMPT,
    parameters: SearchFlightsRequestBody$inboundSchema,
  },
  {
    method: 'twitter_get_tweet',
    name: 'Twitter Get Tweet',
    description: TWITTER_GET_TWEET_PROMPT,
    parameters: GetTweetRequestBody$inboundSchema,
  },
  {
    method: 'twitter_get_user',
    name: 'Twitter Get User',
    description: TWITTER_GET_USER_PROMPT,
    parameters: GetUserRequestBody$inboundSchema,
  },
  {
    method: 'twitter_get_user_followers',
    name: 'Twitter Get User Followers',
    description: TWITTER_GET_USER_FOLLOWERS_PROMPT,
    parameters: GetUserFollowersRequestBody$inboundSchema,
  },
  {
    method: 'twitter_get_user_followings',
    name: 'Twitter Get User Followings',
    description: TWITTER_GET_USER_FOLLOWINGS_PROMPT,
    parameters: GetUserFollowingsRequestBody$inboundSchema,
  },
  {
    method: 'twitter_get_user_tweets',
    name: 'Twitter Get User Tweets',
    description: TWITTER_GET_USER_TWEETS_PROMPT,
    parameters: GetUserTweetsRequestBody$inboundSchema,
  },
  {
    method: 'twitter_search_tweets',
    name: 'Twitter Search Tweets',
    description: TWITTER_SEARCH_TWEETS_PROMPT,
    parameters: SearchTweetsRequestBody$inboundSchema,
  },
  {
    method: 'twitter_search_users',
    name: 'Twitter Search Users',
    description: TWITTER_SEARCH_USERS_PROMPT,
    parameters: SearchUsersRequestBody$inboundSchema,
  },
  {
    method: 'yelp_get_business',
    name: 'Yelp Get Business',
    description: YELP_GET_BUSINESS_PROMPT,
    parameters: GetBusinessRequestBody$inboundSchema,
  },
  {
    method: 'yelp_get_business_reviews',
    name: 'Yelp Get Business Reviews',
    description: YELP_GET_BUSINESS_REVIEWS_PROMPT,
    parameters: GetBusinessReviewsRequestBody$inboundSchema,
  },
  {
    method: 'yelp_search_businesses',
    name: 'Yelp Search Businesses',
    description: YELP_SEARCH_BUSINESSES_PROMPT,
    parameters: SearchBusinessesRequestBody$inboundSchema,
  },
  {
    method: 'zillow_get_property',
    name: 'Zillow Get Property',
    description: ZILLOW_GET_PROPERTY_PROMPT,
    parameters: GetPropertyRequestBody$inboundSchema,
  },
  {
    method: 'zillow_search_properties',
    name: 'Zillow Search Properties',
    description: ZILLOW_SEARCH_PROPERTIES_PROMPT,
    parameters: SearchPropertiesRequestBody$inboundSchema,
  },
];

export default tools;
