# Deployment Guide

This guide will help you deploy your personal portfolio website to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (free)
- Your portfolio website code pushed to GitHub

## Step 1: Prepare Your Website

1. **Customize your information**:
   - Edit `src/config/site.ts` with your personal information
   - Update your name, email, social media links
   - Add your own projects and skills
   - Update the hero section content

2. **Test locally**:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 to see your website

3. **Build test**:
   ```bash
   npm run build
   ```
   Make sure the build completes successfully

## Step 2: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com
   - Click "New repository"
   - Name it something like `personal-portfolio`
   - Don't initialize with README (we already have one)

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/yourusername/personal-portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign up/login with your GitHub account

2. **Import your project**:
   - Click "New Project"
   - Select your portfolio repository from the list
   - Vercel will automatically detect it's a Next.js project

3. **Configure deployment**:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `.next` (should be auto-detected)
   - **Install Command**: `npm install` (should be auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)

## Step 4: Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" tab
   - Click "Domains" in the left sidebar

2. **Add your domain**:
   - Enter your domain (e.g., `yourname.com`)
   - Click "Add"

3. **Configure DNS**:
   - Vercel will show you the required DNS records
   - Add these records to your domain registrar's DNS settings
   - Wait for DNS propagation (can take up to 48 hours)

## Step 5: Update and Redeploy

Whenever you make changes to your website:

1. **Push changes to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **Vercel will automatically redeploy**:
   - Vercel detects changes and starts a new deployment
   - Your site updates automatically

## Environment Variables

For this portfolio website, no environment variables are required. If you add features that need API keys or other secrets, you can add them in the Vercel dashboard under Settings > Environment Variables.

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Test locally with `npm run build`
- Make sure all dependencies are in `package.json`

### Domain Issues
- Verify DNS records are correct
- Wait for DNS propagation
- Check domain settings in Vercel

### Performance Issues
- Optimize images
- Check bundle size with `npm run build`
- Use Next.js Image component for images

## Analytics (Optional)

You can add analytics to track visitors:

1. **Google Analytics**:
   - Create a Google Analytics account
   - Add the tracking code to your layout

2. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - Add the tracking code to your layout

## Security

- Keep your dependencies updated
- Use HTTPS (automatic with Vercel)
- Don't commit sensitive information
- Use environment variables for secrets

## Support

If you encounter issues:
1. Check Vercel documentation
2. Look at build logs in Vercel dashboard
3. Test locally first
4. Check Next.js documentation

Your portfolio website should now be live and automatically update when you push changes to GitHub! 