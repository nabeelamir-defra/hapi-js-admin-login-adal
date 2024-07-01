import adal from 'adal-node';

const acquireTokenWithUsernamePasswordAsync = (authContext, resource, username, password, clientId) => {
  return new Promise((resolve, reject) => {
    authContext.acquireTokenWithUsernamePassword(resource, username, password, clientId, (err, tokenResponse) => {
      if (err) {
        return reject(err);
      }
      resolve(tokenResponse);
    });
  });
};

export default [
  {
    method: "GET",
    path: "/login",
    /**
     * Handler for fetching all rivers.
     *
     * @param {import('@hapi/hapi').Request request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
    * @returns {import('@hapi/hapi').ResponseObject} - A response containing the rivers or an error
     */
    handler: async (request, h) => {
      try {
        const username = request.query.username;
        const password = request.query.password;

        const authenticationContext =
          new adal.AuthenticationContext(process.env.AUTHORITY_URL, true);

        const tokenResponse = await acquireTokenWithUsernamePasswordAsync(authenticationContext, process.env.RESOURCE, username, password, process.env.CLIENT_ID);

        return h.response(tokenResponse).code(200);
      } catch (err) {
        console.log('well that didn\'t work: ' + err.stack);
        return h.response('error').code(500);
      }

    },
  }
]
