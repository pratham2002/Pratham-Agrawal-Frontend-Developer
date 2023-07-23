## React App README

This is a React app that demonstrates various features and best practices. Below is a summary of the key aspects used in this project.

# Frontend

## Technologies Used -

- React: A popular JavaScript library for building user interfaces.
- Custom Hooks: Custom hooks have been utilized to encapsulate and reuse logic across components, making the code more modular and maintainable.
- API Calls for Authentication: The app employs API calls to handle user authentication, ensuring secure access to protected routes.
- API Calls for Filtering and Listing Data: The app fetches and filters data from the server using API calls to display relevant information to the users.
- Hooks: The app uses `useState`, `useEffect`, and `useReducer` hooks to manage state, perform side effects, and handle complex state changes effectively.
- Code Splitting: Code splitting has been implemented to optimize performance by loading only the required code for each route, resulting in faster load times.
- Responsive Design: The app is designed to be responsive, adapting to various screen sizes and devices, offering a consistent experience for all users.
- No CSS Library: The app has been styled entirely from scratch, avoiding the use of external CSS libraries for a custom design and reduced bundle size.

## Features -

1. User Authentication: Users can sign up, log in, and log out securely using API calls for authentication. JWT tokens are used to manage user sessions.
2. Filtering and Listing Data: Users can apply various filters to display specific data sets using API calls to fetch and filter information.
3. Custom Hooks: Custom hooks have been created to encapsulate common logic and enhance reusability across components, improving code maintainability.
4. Hooks: React hooks like `useState`, `useEffect`, and `useReducer` are used to manage component state, handle side effects, and manage complex state transitions.
5. Code Splitting: The app implements code splitting to optimize load times by dynamically loading chunks of code only when needed.
6. Responsive Design: The app is designed to be responsive, providing an optimal user experience on different devices and screen sizes.

# Backend

## SpaceX Capsules API

This is a simple Node.js and Express application that provides an API for fetching information about SpaceX capsules. It also includes user authentication using JWT (JSON Web Tokens). The API allows filtering capsules based on various parameters.

## Features

- User Authentication: Users can log in using their email and password to obtain a JWT token for accessing protected routes.
- Filtering Capsules: Users can filter capsules using query parameters like `capsule_serial`, `capsule_id`, `status`, `original_launch`, `mission`, `landings`, `type`, and `reuse_count`.
- Pagination: The API supports pagination with `limit` and `offset` query parameters to fetch a specific number of capsules per request.
- CORS: Cross-Origin Resource Sharing (CORS) is enabled to allow requests from the front-end hosted on `http://localhost:3000`.

## API Endpoints

### POST /login

This endpoint handles user authentication. Users can log in by providing their `email` and `password` in the request body. Upon successful authentication, the server returns a JWT token, which should be included in the `Authorization` header for accessing protected routes.

### GET /capsules

This endpoint fetches information about SpaceX capsules. Users can apply filters using query parameters to retrieve specific capsule data. The available query parameters are:

- `capsule_serial`: Filter by capsule serial number.
- `capsule_id`: Filter by capsule ID.
- `status`: Filter by the status of the capsule (e.g., active, retired, unknown).
- `original_launch`: Filter by the original launch date in ISO format (e.g., "2015-04-14T20:10:00.000Z").
- `mission`: Filter by mission name.
- `landings`: Filter by the number of landings.
- `type`: Filter by capsule type (e.g., Dragon 1.1, Dragon 2.0).
- `reuse_count`: Filter by the number of times the capsule has been reused.
- `limit`: Limit the number of results per request (default: 10).
- `offset`: Set the offset for pagination (default: 0).

The API response will contain a JSON object with a `message` and `data` field. The `data` field will contain an array of capsule objects based on the applied filters.

## Authentication Middleware

The `authenticateToken` middleware is used to protect routes that require authentication. It verifies the JWT token present in the `Authorization` header and grants access to protected routes if the token is valid.

## Contributing

Contributions to this project are welcome! Please feel free to submit issues or pull requests to enhance the application.

## Getting Started

1. Clone the repository: `git clone https://github.com/pratham2002/Pratham-Agrawal-Frontend-Developer.git`
2. Install dependencies: `npm install`
3. Install dependencies for backend: `cd backend && npm install`
4. Run the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:3000`

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the code as per the terms of the license.

## Contributing

Contributions are welcome! Feel free to raise issues or submit pull requests to help improve the project.

## Credits

This project was created by Pratham Agrawal. Special thanks to the SpaceX API for providing the capsule data and the React community for the inspiration.
