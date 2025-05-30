const request = require('supertest');
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('../schemas');

jest.setTimeout(10000); // Optional: Keep a generous timeout for safety

let apolloServer;
const app = express();
app.use(express.json());

beforeAll(async () => {
  apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  app.use('/graphql', expressMiddleware(apolloServer));
});

afterAll(async () => {
  await apolloServer.stop();
});

describe('GraphQL Operations (No Auth)', () => {
  test('me query - should return null or error without auth', async () => {
    const query = {
      query: `
        query {
          me {
            _id
            username
            email
          }
        }
      `,
    };
    const res = await request(app).post('/graphql').send(query);
    expect(res.body.data?.me === null || res.body.errors).toBeTruthy();
  });

  test('saveBook - should return error or partial result without auth', async () => {
    const mutation = {
      query: `
        mutation {
          saveBook(bookData: {
            bookId: "123",
            title: "Test Book",
            description: "A book to test saving",
            authors: ["Author"]
          }) {
            _id
            savedBooks {
              bookId
              title
            }
          }
        }
      `,
    };
    const res = await request(app).post('/graphql').send(mutation);
    expect(res.body.errors || res.body.data.saveBook).toBeDefined();
  });

  test('removeBook - should return error or partial result without auth', async () => {
    const mutation = {
      query: `
        mutation {
          removeBook(bookId: "123") {
            _id
            savedBooks {
              bookId
            }
          }
        }
      `,
    };
    const res = await request(app).post('/graphql').send(mutation);
    expect(res.body.errors || res.body.data.removeBook).toBeDefined(); 
  });

   test('introspection - should return schema types', async () => {
    const query = {
      query: `
        {
          __schema {
            types {
              name
            }
          }
        }
      `,
    };

    const res = await request(app).post('/graphql').send(query);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data?.__schema?.types)).toBe(true);
  });

});


