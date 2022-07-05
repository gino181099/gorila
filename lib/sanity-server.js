import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skxety1VDkQMtQFhazRIZ6gPVSDGH4Njlrlvw20GKHNvFTKcXOkIShsiInfrH2xsjcxJ5X0wgDpN6vkLrsFOtkHp7T70p8ZFcx8BDvDnf6rB5FIX1AqfpCcL7czQ2FAq4VTMBTlCRHPHDWaJ0G8jBlLre6LU3O9phL1sVjwG9w7aM2jYYbA6",
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
