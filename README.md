# Shashindra Vadlakonda - Portfolio

A professional, modern, and responsive personal portfolio website built with React and Tailwind CSS.

## Features
- Clean, modern UI
- Responsive and mobile-friendly
- Smooth scroll navigation
- Project showcase
- Certifications and skills
- Contact section
- Deployable to GitHub Pages

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```

## Deployment

To deploy to GitHub Pages:
1. Add your repository URL to `package.json` as the `homepage` field.
2. Install gh-pages:
   ```sh
   npm install --save-dev gh-pages
   ```
3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Deploy:
   ```sh
   npm run deploy
   ```

## Customization
- Update your social/profile/resume links in the components.
- Replace the profile photo placeholder in `public/profile-placeholder.png`. 