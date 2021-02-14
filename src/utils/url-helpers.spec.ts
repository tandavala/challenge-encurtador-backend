import { UrlHasher } from './url-helpers';

describe('UrlHasher', () => {
  describe('normalizedUrl', () => {
    it('lowercase the URL', () => {
      const url = new UrlHasher('HTTPS://GOOGLE.COM');
      expect(url.normalizedUrl).toEqual('https://google.com/');
    });
    it('should change when in presence of query string', () => {
      const url = new UrlHasher('HTTPS://GOOGLE.COM/?A=B&C=D');
      expect(url.normalizedUrl).toEqual('https://google.com/?A=B&C=D');
    });
    it('reoders the GET params', () => {
      const url = new UrlHasher('https://google.com/?c=d&a=b');
      expect(url.normalizedUrl).toEqual('https://google.com/?a=b&c=d');
    });
  });

  describe('hash', () => {
    it('should generate the same hash for the same URL', () => {
      const one = new UrlHasher('https://google.com');
      const two = new UrlHasher('https://google.com');

      expect(one.hash).toEqual(two.hash);
    });

    it('generates the same hash for the same GET paramenters in differente order', () => {
      const one = new UrlHasher('https://google.com/?a=b&c=d');
      const two = new UrlHasher('https://google.com/?c=d&a=b');

      expect(one.hash).toEqual(two.hash);
    });
    it('generate a different hash for trailing vs trailing slash', () => {
      const one = new UrlHasher('http://google.com/path/');
      const two = new UrlHasher('http://google.com/path');

      expect(one.hash).not.toEqual(two.hash);
    });
  });
});
