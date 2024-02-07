import fs from 'fs';
import path from 'path';


export function readerJson(pathFile: string) {
    const basePath = path.join(process.cwd(), './src/fixture/static/')
    const read = fs.readFileSync(`${basePath}${pathFile}`, 'utf8');
    const json = JSON.parse(read);
    return json;
  }