import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000);
Before(async function () {
  console.log('Starting Parabank test...');
});
After(async function () {
  console.log('Parabank test completed.');
});