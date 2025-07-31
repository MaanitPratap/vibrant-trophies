import { getToken, apiCall } from '@/lib/auth';

export { getToken, apiCall };

// Legacy export for backward compatibility
export const getTokenLegacy = getToken;
export const apiCallLegacy = apiCall;