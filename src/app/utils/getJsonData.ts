import { promises as fs } from "fs";

type NavBarData = {
  values: Array<String>
}

export async function getNavBarData(): Promise<NavBarData> {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data: NavBarData = JSON.parse(file);

  return data;
}
