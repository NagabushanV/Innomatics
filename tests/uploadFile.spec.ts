import { chromium, Page } from 'playwright';
import test, { describe } from "node:test";

describe('UpLoad file', () => {
    const filePath0 = '../tests/Videos/testfile1.pdf';
    const filePath1 = '../tests/Videos/testfile2.pdf';
    test('upload file',async () => {

        const browser = await chromium.launch({
                    headless: false
                })
         const context = await browser.newContext();

         const Page = await context.newPage();
         await Page.goto('https://www.sendgb.com/');
         await Page.setInputFiles("input[name='qqfile']", [filePath0, filePath1]);
    })
    test("Upload using on function", async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/upload');
        page.on("filechooser",async (filechooser) => {
            // await filechooser.isMultiple();
            await filechooser.setFiles([filePath0, filePath1])
        })
        await page.click(".example + div#drag-drop-upload", { force: true})
    })

})

