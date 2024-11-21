import {Exfunc} from 'exfunc';
import ExfuncAPI from '../../shared/api';

jest.mock('exfunc', () => {
  return {
    Exfunc: jest.fn().mockImplementation(() => ({
      google: {
        searchWeb: jest.fn().mockResolvedValue({
          results: ['mocked search result'],
        }),
      },
    })),
  };
});

describe('ExfuncAPI', () => {
  let exfuncAPI: ExfuncAPI;

  beforeEach(() => {
    process.env.EXFUNC_API_KEY = 'test_api_key';
    exfuncAPI = new ExfuncAPI('test-api-key');
  });

  afterEach(() => {
    delete process.env.EXFUNC_API_KEY;
    jest.clearAllMocks();
  });

  describe('run method', () => {
    it('should successfully call google_search_web method', async () => {
      const searchQuery = 'test search query';
      const result = await exfuncAPI.run('google_search_web', searchQuery);

      expect(exfuncAPI.exfunc.google.searchWeb).toHaveBeenCalledWith(
        searchQuery
      );

      expect(result).toEqual({
        results: ['mocked search result'],
      });
    });

    it('should throw an error for an invalid method', async () => {
      await expect(exfuncAPI.run('invalid_method', {})).rejects.toThrow(
        'Invalid method invalid_method'
      );
    });
  });

  describe('constructor', () => {
    it('should throw an error if no API key is provided', () => {
      delete process.env.EXFUNC_API_KEY;

      expect(() => new ExfuncAPI()).toThrow(
        'Did not find EXFUNC_API_KEY, please add an environment variable or pass it as a parameter'
      );
    });

    it('should use API key passed as parameter', () => {
      const apiKey = 'custom_api_key';
      const customExfuncAPI = new ExfuncAPI(apiKey);

      expect(Exfunc).toHaveBeenCalledWith({apiKey});
    });
  });
});
