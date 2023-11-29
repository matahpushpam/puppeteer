class Textarea {
    constructor(page, field) {
        this.page = page;
        this.field = field;
    }

    // Handles population of textarea input field
    async handle() {
        try {
            await this.page.type(this.field.selector, this.field.value);
        } catch (err) {
            console.log('--Error from Textarea class--', err);
        }
    }
}

module.exports = Textarea;