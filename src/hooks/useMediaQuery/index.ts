import { useState, useEffect, useCallback } from 'react';
import { getMatches } from './utils';
import {
  mobileLayoutMediaQuery,
  desktopLayoutMediaQuery,
} from '../../constants/responstive';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query, handleChange]);

  return matches;
};

export const useIsMobileLayout = (): boolean => useMediaQuery(mobileLayoutMediaQuery);

export const useIsDesktopLayout = (): boolean => useMediaQuery(desktopLayoutMediaQuery);
