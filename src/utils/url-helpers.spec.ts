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
});
