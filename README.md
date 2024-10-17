# REST Countries API with React and Vite

This project is a web application that integrates the REST Countries v3 API to display country data. It provides a paginated view of all countries, a search functionality to find specific countries, and the ability to click on a country to view detailed information on a separate page.

## Features

- **View All Countries:** Paginated display of all countries from the REST Countries API.
- **Search Functionality:** Search for countries by name using an input field.
- **Detailed View:** Click on any country to view detailed information such as population, region, capital, languages, and more on a separate page.

## Demo

- **Home Page:** Lists all countries with pagination.
- **Search:** Allows you to search for a specific country by name.
- **Country Details Page:** Displays in-depth details about the selected country.

## Built With

- **React** - Frontend JavaScript framework for building user interfaces.
- **Vite** - Fast build tool and development server for modern web applications.
- **REST Countries v3 API** - Public API providing information about countries.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Seife1/REST-Countries-API.git
   ```
2. Navigate to the project directory:
   ```bash
   cd REST-Countries-API
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
## Project Structure
   ```bash
   scripts/
   ├── deploy.sh           # Script for automating build and deployment
   src/
   ├── assets/             # Static assets like images
   ├── components/         # Reusable components
   ├── context/            # Context API for global state management
   ├── pages/              # Pages
   ├── App.css             # Global styling for the app
   ├── App.jsx             # Main application component
   ├── index.css           # Base styles
   └── main.jsx            # Entry point
   ```
   
## API Reference
This project uses the REST Countries v3 API to fetch country data. The endpoints used are:

* **All Countries**: https://restcountries.com/v3.1/all
* **Country by Name**: https://restcountries.com/v3.1/name/{country}

## Running Locally
To run the app locally:    
```bash
    npm run build
```

## Deployment
A shell script `deploy.sh` is provided to automate the build and deployment process to GitHub Pages.

**Run the deploy script:**
```bash
./scripts/deploy.sh
```
This will:
* Build the application using npm run build.
* Commit and push the dist directory to the gh-pages branch.

Make sure to set the correct permissions for the script before running it:
```bash
chmod +x ./scripts/deploy.sh
```

## Live Demo
You can view the live demo [here](https://seife1.github.io/)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


