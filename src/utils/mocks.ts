import { IUrl } from 'src/urls/interfaces/url.interface';

export const mockUrl = (): IUrl => {
  return {
    id: 1,
    longUrl: 'https://google.com',
    shortenUrl: 'wow',
    expirationDate: Date().toString(),
  };
};
