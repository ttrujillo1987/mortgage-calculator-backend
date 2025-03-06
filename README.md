# Home Purchase Affordability Calculator - Backend

This is the backend for the Home Purchase Affordability Calculator. It provides API endpoints to fetch mortgage rates, property tax rates, and insurance rates, as well as handling affordability calculations.

## Technologies Used
- Node.js
- Express.js
- JSON data storage

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add required environment variables:
   ```sh
   PORT=5001
   NEWS_API_KEY=your_newsapi_key_here
   ```

### Running the Server
To start the backend server, run:
```sh
npm start
```
The server will run on `http://localhost:5001` by default.

## API Endpoints
### Get Mortgage Rates
```
GET /api/mortgageRates/:loanTerm
```
- **Description:** Returns the mortgage interest rate for the given loan term (e.g., 30 years).
- **Example Request:** `/api/mortgageRates/30`
- **Response:**
  ```json
  {
    "interestRate": 7.0
  }
  ```

### Get State Rates
```
GET /api/stateRates/:stateCode
```
- **Description:** Returns the property tax rate and insurance rate for the specified state.
- **Example Request:** `/api/stateRates/CA`
- **Response:**
  ```json
  {
    "propertyTaxRate": 1.1,
    "insuranceRate": 0.5
  }
  ```

### Get Latest Mortgage News
```
GET /api/news
```
- **Description:** Fetches the latest mortgage-related news articles using the NewsAPI.
- **Response:**
  ```json
  {
    "articles": [
      {
        "title": "Mortgage Rates Hit New Highs",
        "url": "https://example.com/article1"
      }
    ]
  }
  ```

## Notes
- Ensure the `.env` file contains a valid `NEWS_API_KEY` to fetch news articles.
- If an API fails, default values will be used in affordability calculations.

