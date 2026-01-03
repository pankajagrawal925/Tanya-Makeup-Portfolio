# Makeup by Tanya Bhartiya - Portfolio Website

This is a React-based portfolio website for a professional makeup artist, styled with Tailwind CSS.

## How to Save and Run this Project

### Option 1: The "No-Code" Way (Static Hosting)
Because this project uses ES Modules via CDN (in `index.html`), it can be run directly by some static file servers, but for best results, we recommend **Option 2**.

### Option 2: Professional Setup (Recommended)
To turn this into a permanent, professional project that you can edit easily later, follow these steps to move it into a **Vite** project.

**Prerequisites:**
- Download and install [Node.js](https://nodejs.org/) on your computer.

**Steps:**

1.  **Create a new project folder:**
    Open your terminal/command prompt and run:
    ```bash
    npm create vite@latest tanya-makeup -- --template react-ts
    cd tanya-makeup
    npm install
    ```

2.  **Install Tailwind CSS:**
    Follow the [Tailwind Vite Guide](https://tailwindcss.com/docs/guides/vite) or run:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
    *Update `tailwind.config.js` to look like the configuration found in the original `index.html`.*

3.  **Copy the Files:**
    - Copy the contents of the `components` folder from your download into `src/components`.
    - Copy `App.tsx` into `src/App.tsx`.
    - Copy `index.css` (if you created one) or add the Tailwind directives to `src/index.css`.

4.  **Run it locally:**
    ```bash
    npm run dev
    ```
    You can now open the local link (usually `http://localhost:5173`) to see your site.

5.  **Deploy to the Web:**
    - Create a GitHub account and push your code there.
    - Connect your GitHub repository to **Vercel** or **Netlify**.
    - They will host your site for free forever.

## Technologies Used
- **React**: UI Library
- **Tailwind CSS**: Styling
- **FontAwesome**: Icons
- **Google Fonts**: Typography (Montserrat & Inter)
