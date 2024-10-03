const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

const secret = 'mysupersecret';
const expiration = '5h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If the authorization header exists, extract the token
    if (req.headers.authorization) {
      token = req.headers.authorization.split(' ')[1]; // "Bearer <tokenvalue>"
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret); 
      req.user = data;
    } catch (err) {
      console.log('Invalid token:', err.message);
      throw new GraphQLError('Could not authenticate user.', {
        extensions: {
          code: 'UNAUTHENTICATED',
        },
      });
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
