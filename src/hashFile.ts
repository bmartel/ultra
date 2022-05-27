import { basename, crypto } from "./deps.ts";

export const hashString = (value: string, short?: boolean): string => {
  const msgUint8 = new TextEncoder().encode(value);
  const hashBuffer = crypto.subtle.digestSync("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map((b) => b.toString(16).padStart(2, "0")).join(
    "",
  );

  if (short) {
    return hash.substring(0, 16);
  }

  return hash;
};

export const hashFile = (url: string): string => {
  // strip query params from hashing
  url = url.split("?")[0];
  // replace directory paths
  url = url.replace(/\//g, "_");

  const filename = url.substring(1);

  const smallHash = hashString(filename, true);
  const result = `${filename}.${smallHash}`;

  return result;
};
