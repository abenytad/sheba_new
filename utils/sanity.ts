import { createClient } from "next-sanity";
const client = createClient({
    projectId: 'ipbc24b6',
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
  });
  

export default client;
