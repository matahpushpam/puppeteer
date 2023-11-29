class Radio {
    constructor(page, field) {
        this.page = page;
        this.field = field;
    }

    // Handles population of radio input field
    async handle() {
        try {
            await this.page.type(this.field.selector, this.field.value);
        } catch (err) {
            console.log('--Error from Radio class--', err);
        }
    }
}

module.exports = Radio;