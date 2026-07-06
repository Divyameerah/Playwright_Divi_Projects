import { Browser, BrowserContext, chromium, Page } from 'playwright';

import { setWorldConstructor } from '@cucumber/cucumber';


export class CustomWorld {


browser!: Browser;


context!: BrowserContext;


page!: Page;


}


setWorldConstructor(CustomWorld);