// import { Client, Account, ID } from "appwrite";
const { Client, Account, ID } = Appwrite;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65c99d9dae0a19f749bd"); // Your project ID

const account = new Account(client);

// Login a user
// const promise = account.createEmailSession(
//   "oiunachukwu@gmail.com",
//   "G458ae6U9G@k3nw"
// );

// promise.then(
//   function (response) {
//     console.log(response); // Success
//   },
//   function (error) {
//     console.log(error); // Failure
//   }
// );

// Register a new user
const promise = account.create(
  ID.unique(),
  "greenboxafrica@gmail.com",
  "greenback@0192",
  "Greenbox Africa"
);

promise.then(
  function (response) {
    console.log("new user: ", response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
