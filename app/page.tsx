import { promises as fs } from "fs";
import path from "path";
import { DataItem } from "../public/types"; // Adjust path as needed
import "./src/index.css";
// import { Card } from "./components/Card";

async function getData(filename: string): Promise<DataItem[]> {
  const filePath = path.join(process.cwd(), "public", filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function Page() {
  const data1 = await getData("references/nouns/nouns-animals.json");
  const data2 = await getData("references/verbs/verbs-communication.json");

  return (
    <div>
      <h1 className="grid">Noun</h1>
      <div>
        <ul className="grid grid-cols-3 gap-4 text-center m-10 text-white font-extrabold">
          {" "}
          {data1.map((item) => (
            <li className="bg-blue-500 p-4 rounded-lg" key={item.id}>
              {item.grammarType} | {item.category} | {item.text}
            </li>
          ))}
        </ul>
      </div>
      <h1>Verb</h1>
      <div>
        <ul className="grid grid-cols-3 gap-4 text-center m-10 text-white font-extrabold">
          {data2.map((item) => (
            <li className="bg-blue-500 p-4 rounded-lg" key={item.id}>
              {item.grammarType} | {item.category} | {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
