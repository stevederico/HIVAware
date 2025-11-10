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
- Vite 6
- React Router 7
- Tailwind CSS 4
- Deno 2.2+

## Prerequisites

- Deno 2.2 or higher

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/HIVAware.git
cd HIVAware
```

2. Install dependencies:
```bash
deno install
```

3. Start the development server:
```bash
deno run start
```

The app will be available at `http://localhost:5173`

## Configuration

Update `src/constants.json` to configure:
- `backendURL` - Your backend server URL (or set `noLogin: true` to run without backend)
- `companyName`, `companyWebsite`, `companyEmail` - Your organization info
- `termsOfService`, `privacyPolicy`, `EULA` - Your legal documents
- `stripeProducts` - Payment configuration (if using Stripe)
- `pages` - Navigation menu items

## Build

Build for production:
```bash
deno run build
```

The built files will be in the `dist/` directory.

## Backend

This app can run with or without a backend. Set `"noLogin": true` in `src/constants.json` to disable authentication requirements.

For backend integration, the app expects endpoints compatible with the skateboard-ui library.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This application provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with questions you may have regarding medical conditions.

## Support

For issues and questions, please open an issue on GitHub.
