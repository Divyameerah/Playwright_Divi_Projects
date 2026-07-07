import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  console.log('Starting Parabank test...');
});

After(async function () {
  console.log('Parabank test completed.');
});