class Checkbox {
    constructor(page, field) {
        this.page = page;
        this.field = field;
    }

    // Handles population of checkbox input field
    async handle() {
        try {
            let element = await this.page.$(this.field.selector);
            element.click();
        } catch (err) {
            console.log('--Error from Checkbox class--', err);
        }
    }
}

module.exports = Checkbox;