import {Exfunc} from 'exfunc';

class ExfuncAPI {
  exfunc: any;

  constructor(apiKey?: string) {
    const envApiKey = process.env.EXFUNC_API_KEY;
    if (!apiKey && !envApiKey) {
      throw new Error(
        'Did not find EXFUNC_API_KEY, please add an environment variable or pass it as a parameter'
      );
    }
    this.exfunc = new Exfunc({apiKey: apiKey || process.env.EXFUNC_API_KEY});
  }

  async run(method: string, arg: any) {
    let result;
    switch (method) {
      case 'google_get_product':
        result = await this.exfunc.google.getProduct(arg);
        return result;
      case 'google_get_product_reviews':
        result = await this.exfunc.google.getProductReviews(arg);
        return result;
      case 'google_search_news':
        result = await this.exfunc.google.searchNews(arg);
        return result;
      case 'google_search_products':
        result = await this.exfunc.google.searchProducts(arg);
        return result;
      case 'google_search_web':
        result = await this.exfunc.google.searchWeb(arg);
        return result;
      case 'linkedin_get_company':
        result = await this.exfunc.linkedin.getCompany(arg);
        return result;
      case 'linkedin_get_job_posting':
        result = await this.exfunc.linkedin.getJobPosting(arg);
        return result;
      case 'linkedin_get_person':
        result = await this.exfunc.linkedin.getPerson(arg);
        return result;
      case 'linkedin_search_companies':
        result = await this.exfunc.linkedin.searchCompanies(arg);
        return result;
      case 'linkedin_search_job_postings':
        result = await this.exfunc.linkedin.searchJobPostings(arg);
        return result;
      case 'linkedin_search_people':
        result = await this.exfunc.linkedin.searchPeople(arg);
        return result;
      case 'navigator_scrape':
        result = await this.exfunc.navigator.scrape(arg);
        return result;
      case 'skyscanner_search_flights':
        result = await this.exfunc.skyscanner.searchFlights(arg);
        return result;
      case 'twitter_get_tweet':
        result = await this.exfunc.twitter.getTweet(arg);
        return result;
      case 'twitter_get_user_followers':
        result = await this.exfunc.twitter.getUserFollowers(arg);
        return result;
      case 'twitter_get_user_followings':
        result = await this.exfunc.twitter.getUserFollowings(arg);
        return result;
      case 'twitter_get_user':
        result = await this.exfunc.twitter.getUser(arg);
        return result;
      case 'twitter_get_user_tweets':
        result = await this.exfunc.twitter.getUserTweets(arg);
        return result;
      case 'twitter_search_tweets':
        result = await this.exfunc.twitter.searchTweets(arg);
        return result;
      case 'twitter_search_users':
        result = await this.exfunc.twitter.searchUsers(arg);
        return result;
      case 'yelp_get_business':
        result = await this.exfunc.yelp.getBusiness(arg);
        return result;
      case 'yelp_get_business_reviews':
        result = await this.exfunc.yelp.getBusinessReviews(arg);
        return result;
      case 'yelp_search_businesses':
        result = await this.exfunc.yelp.searchBusinesses(arg);
        return result;
      case 'zillow_get_property':
        result = await this.exfunc.zillow.getProperty(arg);
        return result;
      case 'zillow_search_properties':
        result = await this.exfunc.zillow.searchProperties(arg);
        return result;
      default:
        throw new Error('Invalid method ' + method);
    }
  }
}

export default ExfuncAPI;
