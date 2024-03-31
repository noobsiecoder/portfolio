import { promises as fs } from "fs";

export default async function LoadFile(fileName: string) {
  const file = await fs.readFile(
    process.cwd() + `/data/${fileName}.json`,
    "utf8"
  );
  return JSON.parse(file);
}
