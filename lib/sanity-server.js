import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skuklY905heXGPJcxjzxdCWNNVPK8xMhgLryQf5hZqrJPq7xTXx7u1QRdMDUKEP5oGiaRMExukQYecOsuGsAejwsgd53cWAkXW9XFU9bMc80uWtvABKPZLnndQe86IjBdc1Phv1v7DZfs1zfNS2bWT493pHQii6LSruWITDplJyTpdyFRxVz",
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
