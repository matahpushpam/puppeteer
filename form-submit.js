const puppeteer = require('puppeteer');
const formConfig = require('./form-config');
const Input = require('./fields/Input');
const Radio = require('./fields/Radio');
const Checkbox = require('./fields/Checkbox');
const Textarea = require('./fields/Textarea');
const File = require('./fields/File');

const formSubmission = async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium'
        });
        const page = await browser.newPage();
        await page.goto(formConfig.url);
        for (field of formConfig.fields) {
            switch (field.type) {
                case 'input': {
                    await new Input(page, field).handle();
                    break;
                }
                case 'radio': {
                    await new Radio(page, field).handle();
                    break;
                }
                case 'textarea': {
                    await new Textarea(page, field).handle();
                    break;
                }
                case 'checkbox': {
                    await new Checkbox(page, field).handle();
                    break;
                }
                case 'file': {
                    await new File(page, field).handle();
                    break;
                }
            }
        }
        new Promise(r => setTimeout(r, 5000));
        await page.click('button[type=submit]');
        await page.waitForNavigation();
        console.log(page.url());
    } catch (err) {
        console.log('Error from form submit JS', err);
    }
}

module.exports = formSubmission;