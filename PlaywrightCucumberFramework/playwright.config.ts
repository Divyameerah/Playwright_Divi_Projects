import { defineConfig } from '@playwright/test';


export default defineConfig({


timeout: 60000,


use: {


headless: false,


viewport: {

width: 1366,

height: 768

},


screenshot: "only-on-failure",


trace: "retain-on-failure",


video: "retain-on-failure"

}


});