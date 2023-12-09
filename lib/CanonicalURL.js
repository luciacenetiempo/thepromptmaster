import { useRouter } from 'next/router';

export const useCanonicalURL = () => {
  const siteUrl = 'https://thepromptmaster.it';
  const { asPath } = useRouter();
  const cleanPath = asPath.split('#')[0].split('?')[0];
  return `${siteUrl}` + (asPath === '/' ? '' : cleanPath);
};