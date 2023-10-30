import { chromium, Page } from '@playwright/test';
import { describe } from "node:test";

describe('Upload file',() =>{
    const filePath0 = '../tests/Videos/testfile1.pdf';
const filePath1 = '../tests/Videos/testfile2.pdf';

test("upload file using set input files", async() => {
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext();

    const Page = await context.newPage();
    await Page.goto('https://www.sendgb.com/');
    await Page.setInputFiles("input[name='qqfile']", filePath0);
});