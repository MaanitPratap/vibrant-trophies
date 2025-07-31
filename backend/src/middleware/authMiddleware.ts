import 'dotenv/config';
import { GetVerificationKey, expressjwt as jwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
// For ID tokens, the audience should be the Auth0 client ID
const audience = process.env.AUTH0_CLIENT_ID || 'http://localhost:3333/';

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: audience,
  issuer: `${issuerBaseUrl}/`,
  algorithms: ['RS256'],
});