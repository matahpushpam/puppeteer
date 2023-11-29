class File {
    constructor(page, field) {
        this.page = page;
        this.field = field;
    }

    // Handles population of file input field
    async handle() {
        try {
            let element = await this.page.$(this.field.selector);
            await element.uploadFile(this.field.value);
        } catch (err) {
            console.log('--Error from File class--', err);
        }
    }
}

module.exports = File;