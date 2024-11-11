const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const axios = require('axios');

const CLAUDE_API_KEY = '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';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { figmaLink } = req.body;
        const designFile = req.file;

        try {
            const result = await processDesignWithClaude(figmaLink, designFile);
            res.status(200).json({ message: 'Design processed successfully!', result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function processDesignWithClaude(figmaLink, designFile) {
    const apiUrl = 'https://api.claude.ai/v1/process'; // Replace with the actual Claude API endpoint

    const data = {
        figmaLink: figmaLink,
        designFile: designFile ? designFile.path : null
    };

    const response = await axios.post(apiUrl, data, {
        headers: {
            'Authorization': `Bearer ${CLAUDE_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}
