import { createClient } from "contentful";

const client = createClient({
  space: "fderq7pfffob",
  environment: "master",
  accessToken: "GU_2EwIBH0LaMmU0_ffqbUXKTA9VyigR-LM_TzBs0VY",
});

client
  .getEntries({ content_type: "project" })
  .then((response) => console.log(response));
