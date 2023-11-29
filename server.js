const http = require('http');
const PORT = process.env.PORT || 3000;
const formSubmission = require('./form-submit');

const server = http.createServer(async (req, res) => {
    let response = {};
    if (req.url === '/api' && req.method === 'GET') {
        try {
            await formSubmission();
            response = {
                message: 'Form submission successful',
                code: 'Successful'
            }
        } catch (err) {
            response = {
                message: 'An error occurred during form submission',
                code: 'Error'
            }
        }
    }
    else {
        response = {
            message: 'Route not found',
            code: 'Failed'
        }
    }
    res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
    console.log(`Server started: ${PORT}`);
});