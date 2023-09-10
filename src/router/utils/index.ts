import { isDevelopmentMode } from '../../utils';

export const getBasename = () => {
  if (isDevelopmentMode()) return '/';
  return '/millionaire/';
};
