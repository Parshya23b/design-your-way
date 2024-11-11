

---

# Design Your Way

**Design Your Way** is an AI-powered tool that allows users to automatically update their designs by pasting a Figma link or uploading design files. The AI handles updates effortlessly, streamlining the design process and enabling users to quickly iterate and refine their projects.

**Built With**: Vercel and Next.js  
**Generative Model**: OpenAI  
**APIs Used**: Tavily AI, Serper, SearXNG, Jina AI  
**Database**: Upstash Redis (Serverless/Local)  
**UI Components**: shadcn/ui, Radix UI  
**Styling**: Tailwind CSS  

---

## Features

- **Automated Design Updates**: Paste a Figma link or upload a design file, and let AI update your design automatically.
- **Generative Model Integration**: Utilizes OpenAI for text generation and processing.
- **Search & Extraction**: Powered by Tavily AI, Serper, SearXNG, and Jina AI for efficient search and data extraction.
- **Efficient Database**: Uses Upstash Redis for serverless or local database solutions.
- **Modern UI**: Developed with shadcn/ui, Radix UI, and Tailwind CSS for a responsive and user-friendly interface.

---

## Tech Stack

- **App Framework**: [Next.js](https://nextjs.org/)
- **Text Streaming / Generative UI**: [Vercel AI SDK](https://vercel.com/docs/ai/vercel-ai-sdk)
- **Generative Model**: [OpenAI](https://openai.com/)
- **Search API**: [Tavily AI](https://tavily.com/), [Serper](https://serper.dev/), [SearXNG](https://searxng.github.io/)
- **Extract API**: [Tavily AI](https://tavily.com/), [Jina AI](https://jina.ai/)
- **Database (Serverless/Local)**: [Upstash](https://upstash.com/), [Redis](https://redis.io/)
- **Component Library**: [shadcn/ui](https://ui.shadcn.dev/)
- **Headless Component Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## Getting Started

Follow the steps below to set up and run this project locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Vercel CLI** (optional, for Vercel deployments)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/design-your-way.git
   cd design-your-way
   ```

2. **Install Dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env.local` file at the root of the project with the following environment variables:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   TAVILY_API_KEY=your_tavily_api_key
   UPSTASH_REDIS_URL=your_upstash_redis_url
   ```

   Replace `your_openai_api_key`, `your_tavily_api_key`, and `your_upstash_redis_url` with the actual keys for OpenAI, Tavily AI, and Upstash Redis.

4. **Configure the Database**

   Ensure you have an Upstash Redis instance set up. Set the Upstash Redis URL in your `.env.local` file as shown above.

5. **Optional: Configure Vercel CLI**

   If you want to deploy to Vercel, run the following commands to link your project:

   ```bash
   vercel login
   vercel link
   ```

---

### Running the Project

Once you've completed the installation steps, run the following command to start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

### Project Structure

- **`/components`**: Contains reusable React components used throughout the app.
- **`/pages`**: Next.js page components, which define the routes.
- **`/lib`**: Contains utility functions and API configuration files.
- **`/styles`**: Contains global and component-specific styling, primarily using Tailwind CSS.

---

### Usage

1. **Upload or Paste a Design Link**: Start by uploading a design file or pasting a Figma link into the input field on the main screen.
2. **AI-Driven Updates**: The system automatically analyzes the design and applies updates.
3. **View and Refine**: Review the updated design and make refinements as needed.

---

### Deployment

To deploy this project on Vercel:

1. Push your changes to GitHub.
2. Go to your Vercel dashboard and import your repository.
3. Set the environment variables in the Vercel dashboard as per your `.env.local`.
4. Click **Deploy**.

---

## Contributing

We welcome contributions! Please fork this repository and create a pull request with your changes.

1. Fork the project.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---


---

Enjoy designing with **Design Your Way**! 🖌️💡
