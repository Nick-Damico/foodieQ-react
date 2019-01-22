export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api/v1"
    : "https://foodieq-api.herokuapp.com/api/v1";
