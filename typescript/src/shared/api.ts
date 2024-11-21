import {Exfunc} from 'exfunc';

class ExfuncAPI {
  exfunc: any;

  constructor(apiKey?: string) {
    const envApiKey = process.env['EXFUNC_API_KEY'];
    if (!apiKey && !envApiKey) {
      throw new Error(
        'Did not find EXFUNC_API_KEY, please add an environment variable or pass it as a parameter'
      );
    }
    this.exfunc = new Exfunc({apiKey: apiKey || process.env['EXFUNC_API_KEY']});
  }

  async run(method: string, arg: any) {
    switch (method) {
      case 'google_get_product':
        return await this.exfunc.google.getProduct(arg);
      case 'google_get_product_reviews':
        return await this.exfunc.google.getProductReviews(arg);
      case 'google_search_news':
        return await this.exfunc.google.searchNews(arg);
      case 'google_search_products':
        return await this.exfunc.google.searchProducts(arg);
      case 'google_search_web':
        return await this.exfunc.google.searchWeb(arg);
      case 'linkedin_get_company':
        return await this.exfunc.linkedin.getCompany(arg);
      case 'linkedin_get_job_posting':
        return await this.exfunc.linkedin.getJobPosting(arg);
      case 'linkedin_get_person':
        return await this.exfunc.linkedin.getPerson(arg);
      case 'linkedin_search_companies':
        return await this.exfunc.linkedin.searchCompanies(arg);
      case 'linkedin_search_job_postings':
        return await this.exfunc.linkedin.searchJobPostings(arg);
      case 'linkedin_search_people':
        return await this.exfunc.linkedin.searchPeople(arg);
      case 'navigator_scrape':
        return await this.exfunc.navigator.scrape(arg);
      case 'skyscanner_search_flights':
        return await this.exfunc.skyscanner.searchFlights(arg);
      case 'twitter_get_tweet':
        return await this.exfunc.twitter.getTweet(arg);
      case 'twitter_get_user_followers':
        return await this.exfunc.twitter.getUserFollowers(arg);
      case 'twitter_get_user_followings':
        return await this.exfunc.twitter.getUserFollowings(arg);
      case 'twitter_get_user':
        return await this.exfunc.twitter.getUser(arg);
      case 'twitter_get_user_tweets':
        return await this.exfunc.twitter.getUserTweets(arg);
      case 'twitter_search_tweets':
        return await this.exfunc.twitter.searchTweets(arg);
      case 'twitter_search_users':
        return await this.exfunc.twitter.searchUsers(arg);
      case 'yelp_get_business':
        return await this.exfunc.yelp.getBusiness(arg);
      case 'yelp_get_business_reviews':
        return await this.exfunc.yelp.getBusinessReviews(arg);
      case 'yelp_search_businesses':
        return await this.exfunc.yelp.searchBusinesses(arg);
      case 'zillow_get_property':
        return await this.exfunc.zillow.getProperty(arg);
      case 'zillow_search_properties':
        return await this.exfunc.zillow.searchProperties(arg);
      default:
        throw new Error('Invalid method ' + method);
    }
  }
}

export default ExfuncAPI;
