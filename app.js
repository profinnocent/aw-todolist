// import { Client, Account, ID } from "appwrite";
const { Client, Account, ID } = Appwrite;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65c99d9dae0a19f749bd"); // Your project ID

const account = new Account(client);

const promise = account.create(
  ID,
  "greenboxafrica@gmail.com",
  "greenback@0192"
);

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
