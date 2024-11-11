const express = require('express');
const multer = require('multer');
const axios = require('axios'); // For making HTTP requests
const app = express();
const upload = multer({ dest: 'uploads/' });

// Your Claude AI API key
const CLAUDE_API_KEY = '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';

// Function to process design with Claude AI
async function processDesignWithClaude(figmaLink, designFile) {
    const apiUrl = 'https://api.claude.ai/v1/process'; // Replace with the actual Claude API endpoint

    // Prepare the request data
    const data = {
        figmaLink: figmaLink,
        designFile: designFile ? designFile.path : null // Path to the uploaded file
    };

    try {
        const response = await axios.post(apiUrl, data, {
            headers: {
                'Authorization': `Bearer ${CLAUDE_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data; // Assuming the API returns processed design data
    } catch (error) {
        console.error('Error processing design with Claude AI:', error);
        throw new Error('AI processing failed');
    }
}

app.post('/api/design', upload.single('designFile'), async (req, res) => {
    const figmaLink = req.body.figmaLink;
    const designFile = req.file;

    try {
        const result = await processDesignWithClaude(figmaLink, designFile);
        res.json({ message: 'Design processed successfully!', result: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
