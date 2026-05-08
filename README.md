# TaskBloom Documentation

Enterprise-grade documentation for the TaskBloom microtask platform.

## Overview

This is the official documentation site for TaskBloom, a global microtask ecosystem that connects advertisers, task workers, administrators, team leads, and resellers.

## Documentation Sections

- **Getting Started** - Platform overview, registration, dashboard tour
- **Advertiser Guide** - Campaign creation, management, analytics
- **Worker Guide** - Task discovery, completion, earnings
- **Admin Guide** - Platform management, moderation, finance
- **Team Lead** - Task approval, team management
- **Reseller** - Voucher inventory, orders
- **Wallet & Financial** - Transactions, payouts, voucher economics
- **Security & Compliance** - Fraud prevention, policies
- **Troubleshooting** - Common issues and solutions
- **Developer** - Architecture, schema, services

## Tech Stack

- **Next.js 14** - React framework
- **Nextra** - MDX documentation theme
- **TailwindCSS** - Styling
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at http://localhost:3000

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                    # Next.js app directory (App Router)
│   ├── getting-started/    # Getting started docs
│   ├── advertiser/         # Advertiser documentation
│   ├── worker/           # Worker documentation
│   ├── admin/            # Admin documentation
│   ├── wallet/           # Financial documentation
│   ├── security/         # Security documentation
│   ├── troubleshooting/  # Help docs
│   ├── developer/        # Technical docs
│   └── page.mdx          # Homepage
├── components/            # React components
├── theme.config.tsx       # Nextra theme configuration
├── tailwind.config.ts    # TailwindCSS config
└── package.json          # Dependencies
```

## Writing Documentation

### Adding New Pages

Create MDX files in the appropriate section:

```mdx
---
title: Page Title
description: Brief description for SEO
---

# Page Title

Your content here...
```

### Using Components

The docs support custom callouts:

```mdx
:::tip
Helpful tip
:::

:::warning
Warning message
:::

:::info
Information
```

### Code Blocks

```php
<?php
// PHP code example
$user = User::findByEmail($email);
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: next build
   - Output Directory: .next

### Manual Build

```bash
npm run build
# Deploy .next folder to hosting
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2026 TaskBloom. All rights reserved.

## Support

- Documentation: https://taskbloom.co.uk/docs
- Email: support@taskbloom.co.uk
- Main Site: https://taskbloom.co.uk