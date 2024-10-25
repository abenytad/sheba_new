import { createClient } from "next-sanity";
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
  });
  

export default client;
