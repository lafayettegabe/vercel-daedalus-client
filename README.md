# Daedalus Institute Client

Welcome to the Daedalus Institute Client README. This document provides essential information and instructions for setting up and running the client application. The client application is built using Next.js, TypeScript, and Tailwind CSS. It consumes the APIs provided by the Daedalus Institute Server and offers a platform for clients to authenticate and utilize various apps. Please follow the instructions below to get started.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The Daedalus Institute Client is a Next.js application that provides a platform for clients to access the services and applications provided by the Daedalus Institute. It consumes the RESTful APIs exposed by the Daedalus Institute Server and offers a user-friendly interface for authentication, app usage, and data interaction.

## Installation

To install and set up the Daedalus Institute Client, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/DaedalusInstitute/daedalus-client.git
```

2. Change into the project directory:

```bash
cd client
```

3. Install the required dependencies:

```bash
npm install
```

## Configuration

The Daedalus Institute Client requires certain configurations to connect to the Daedalus Institute Server and authenticate users. Follow these steps to configure the client:

1. Create a `.env.local` file in the root directory of your client:

```
NEXT_PUBLIC_API_URL=https://your-daedalus-institute-server/api
```

Replace `https://your-daedalus-institute-server/api` with the actual URL of the Daedalus Institute Server API.

2. Adjust any other configuration settings as needed. For example, specify other environment variables required by your client.

## Usage

To run the Daedalus Institute Client, follow these steps:

1. Start the client application:

```bash
npm run dev
```

2. Access the client application at `http://localhost:3000/` or the specified host and port.

## Contributing

We welcome contributions to the Daedalus Institute Client. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Submit a pull request, explaining your changes and their benefits.

## License

The Daedalus Institute Client is licensed under the [MIT License](LICENSE). Please review the license file for more details.

---

Thank you for choosing the Daedalus Institute Client. If you have any questions or need further assistance, please contact us at support@daedalus-institute.com.
