import { test, expect, request, APIRequestContext } from '@playwright/test';

test.describe.serial('Petstore API CRUD Operations', () => {
  let apiContext: APIRequestContext;
  let petId: number;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
      extraHTTPHeaders: { 'Content-Type': 'application/json' }
    });
  });

  test('Create a new pet', async () => {
    const response = await apiContext.post('/posts', {
      data: {
        title: 'Fluffy',
        body: 'available',
        userId: 1
      }
    });

    expect([200, 201]).toContain(response.status());
    const body = await response.json();
    petId = body.id;
    expect(body.title).toBe('Fluffy');
    expect(body.body).toBe('available');
  });

  test('Read pet details', async () => {
    const response = await apiContext.get('/posts/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toBeTruthy();
  });

  test('Update pet details', async () => {
    const response = await apiContext.put('/posts/1', {
      data: {
        id: 1,
        title: 'FluffyUpdated',
        body: 'sold',
        userId: 1
      }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.title).toBe('FluffyUpdated');
    expect(body.body).toBe('sold');
  });

  test('Delete pet', async () => {
    const response = await apiContext.delete('/posts/1');
    expect(response.status()).toBe(200);
  });
});
