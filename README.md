# Syntigra | Engineered Data. Intelligent Decisions.

Syntigra is a high-performance enterprise data engineering platform website, designed to showcase advanced data infrastructure solutions. The application features a sophisticated dark-mode aesthetic, interactive data visualizations, and a responsive glassmorphism UI.

## 🚀 Technology Stack

- **Core**: React 18.2 (Vite)
- **Styling**: Tailwind CSS (CDN-based for rapid styling)
- **Animations**: Framer Motion (Complex state-based transitions)
- **Visualizations**: Recharts (Data charts and mockups)
- **Icons**: Lucide React
- **Routing**: React Router DOM (HashRouter)

## 📁 Project Structure

```bash
syntigra_website/
├── components/          # Reusable UI Components
│   ├── Layout.tsx       # Core layout with Navbar & Footer
│   ├── PageHero.tsx     # Dynamic hero section with theme support
│   ├── ETLVisualizer.tsx # Interactive ETL flow visualization
│   ├── VisualComponents.tsx # Dashboard & Report mockups
│   ├── MotionSystem.tsx # Advanced 3D tilt and animation wrappers
│   └── RevealOnScroll.tsx # Scroll-triggered animation wrapper
├── pages/               # Page-level components
│   ├── Home.tsx         # Landing Page
│   ├── Services.tsx     # Enterprise solutions detail
│   └── Technology.tsx   # Modern tech stack showcase
├── public/              # Static assets (Logos, Icons, Images)
├── App.tsx              # Main entry point with Routing & Placeholder pages
├── index.tsx            # React DOM mounting
├── index.html           # HTML5 Entry with Branding Tokens
├── index.css            # Global CSS Resets & Gradient definitions
└── package.json         # Build scripts & dependencies
```

## 🛣 Application Routes

The application uses `HashRouter` for stable navigation across various environments:

| Path | Description |
| :--- | :--- |
| `/` | **Home**: Brand identity and core value proposition. |
| `/services` | **Services**: Detailed breakdown of data engineering offerings. |
| `/technology` | **Technology**: The modern stack used in client projects. |
| `/integrations` | **Integrations**: Ecosystem connectivity overview. |
| `/security` | **Security**: Compliance and trust standards (SOC2, GDPR). |
| `/industries` | **Industries**: Sector-specific case applications. |
| `/cases` | **Case Studies**: Real-world success stories and metrics. |
| `/engagement` | **Engagement**: Flexible partnership models. |
| `/contact` | **Contact**: Project inquiry and consultation form. |

## 🎨 Branding Guidelines

### Typography
- **Headlines**: `Orbitron` (High-tech, geometric sans-serif)
- **Body**: `Inter` (Clean, professional, highly readable)

### Color Palette
- **Brand Orange**: `#f05223` (Primary Action / CTA)
- **Brand Purple**: `#3a1554` (Primary Branding / Gradients)
- **Brand Pink**: `#e79ecf` (Accent / Decorative)
- **Brand Yellow**: `#ffc43b` (Accent / Status)
- **Base Background**: `#0B1120` (Deep Enterprise Dark)

## 🛠 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Install dependencies
npm install
```

### Development
```bash
# Run local dev server
npm run dev
```

### Production Build
```bash
# Build static files to /dist
npm run build
```

## 🌐 Deployment Note

The application is configured to be served via **Nginx**. The production build resides in the `/dist` folder.

**Nginx Recommendation:**
```nginx
location / {
    root /var/www/html/syntigra_website/dist;
    try_files $uri $uri/ /index.html;
}
```

---
*Created by Antigravity AI for Osama - 2026*
