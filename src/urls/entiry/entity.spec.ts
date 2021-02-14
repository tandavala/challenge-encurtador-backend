import { Url } from './url.entity';

describe('Url class', () => {
  it('should make a url with no fields', () => {
    const url = new Url();
    expect(url).toBeTruthy();
    expect(url.longUrl).toBe('');
    expect(url.shortenUrl).toBe('');
  });
});
