# HiPhae

HiPhae is a premium family health operating system prototype built with Expo, React Native, and TypeScript.

## Product Positioning

- Premium Family Health Operating System
- Apple Health + Wealth Management Dashboard
- Light-only, mobile-first SaaS interface
- Reusable, typed components and realistic household data

## Run Locally

```bash
npm install
npm run start
```

Then open the app with Expo Go or a simulator.

The app targets Expo SDK 56, React Native 0.85, and React 19.2.3. Use Node.js 22.13 or newer.

## Upload to GitHub

Create an empty GitHub repository named `hiphae`, then run these commands from this folder:

```bash
git init
git branch -M main
git add .
git commit -m "Initial HiPhae app"
git remote add origin https://github.com/YOUR_USERNAME/hiphae.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Deploy Web App to Vercel

After the repository is on GitHub:

1. Open Vercel and choose `Add New Project`.
2. Import the `hiphae` GitHub repository.
3. Keep the root directory as `.`.
4. Vercel will use `vercel.json`:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click `Deploy`.

Vercel deploys the Expo web build. Native iOS and Android app builds should be created separately with Expo EAS Build.

## Included Screens

- Home Dashboard
- Family Graph
- Member Profile
- Prescription Scanner
- Insurance Optimizer
- Pillbox Ledger
- Vaccine Intelligence
- Medical Vault
- Insights

## Notes

The project uses realistic synthetic sample data for health metrics, coverage, medication schedules, vaccine timelines, alerts, and vault documents. Clinical and insurance logic is illustrative and should be connected to certified data sources before production medical use.
