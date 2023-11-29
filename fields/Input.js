class Input {
    constructor(page, field) {
        this.page = page;
        this.field = field;
    }

    // Handles population of textbox field
    async handle() {
        try {
            await this.page.type(this.field.selector, this.field.value);
        } catch (err) {
            console.log('--Error from Input class--', err);
        }
    }
}

module.exports = Input;