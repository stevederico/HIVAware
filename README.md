# HIVAware

HIV education and awareness application providing information about prevention, risks, and testing.

## Features

- **Prevention**: Learn how HIV and STDs are transmitted and how to protect yourself
- **Risk Calculator**: Understand the risks associated with various activities
- **Testing Locator**: Find HIV and STD testing sites near you
- **Mobile-Friendly**: Responsive design that works on all devices
- **Dark Mode**: Built-in dark mode support

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- skateboard-ui 5.1.0 (application shell)
- Zero-crate Rust backend (SQLite via system libsqlite3)

## Prerequisites

- Node.js 24 or higher
- Rust 1.95 or higher (backend only)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/stevederico/HIVAware.git
cd HIVAware
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start      # frontend on :5173
cd backend && cargo run   # backend on :8000
```

The app will be available at `http://localhost:5173`

## Configuration

Update `src/constants.json` to configure:
- `backendURL` - Your backend server URL (or set `noLogin: true` to run without backend)
- `companyName`, `companyWebsite`, `companyEmail` - Your organization info
- `hasTermsOfService`, `hasPrivacyPolicy`, `hasEULA`, `hasSubscriptionDetails` - Footer link toggles (bodies live in `src/legal.json`)
- `stripeProducts` - Payment configuration (if using Stripe)
- `pages` - Navigation menu items

## Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Backend

This app can run with or without a backend. Set `"noLogin": true` in `src/constants.json` to disable authentication requirements.

The backend is zero-crate Rust in `backend/` (`cargo run`, `cargo test --locked`). In production it refuses to start unless `JWT_SECRET` is set, at least 32 characters, and not the `.env.example` placeholder.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This application provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with questions you may have regarding medical conditions.

## Support

For issues and questions, please open an issue on GitHub.

---

<div align="center">
  Made with <a href="https://github.com/stevederico/skateboard">Skateboard</a> — a React boilerplate with auth and payments
</div>
