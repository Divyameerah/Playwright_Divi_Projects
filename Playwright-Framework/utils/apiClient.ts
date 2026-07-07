import { request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

export async function getApiContext() {
  if (!apiContext) {
    apiContext = await request.newContext({
      baseURL: 'https://petstore.swagger.io/v2',
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    });
  }
  return apiContext;
}
