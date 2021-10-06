const isServer = typeof window === 'undefined';
export const isStagingEnv = isServer
// Back end de Dev
  ? process.env.NODE_ENV === 'development'
// Back end de prod
  : globalThis.location.href.includes('localhost');
