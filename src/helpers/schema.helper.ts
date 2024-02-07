import Ajv from 'ajv';
import { createSchema } from 'genson-js';
import fs from 'fs';

const ajv = new Ajv({ allErrors: true, verbose: true, strict: false });

function schemaGenerator(file: string, response: object) {
    const baseFixture = `src/fixture/schema/${file}`;
    const schemaString = createSchema(response);
    const schemaObject = JSON.stringify(schemaString, null, 2);

    if(!fs.existsSync(baseFixture)) {
      console.log('Arquivo não encontrado. Criando o arquivo...');
      fs.writeFileSync(baseFixture, schemaObject);

    } else {
      console.log('Arquivo schema já existe!');
    }
  
};

export async function schemaValidation (fileName: string, response: Object) {
  schemaGenerator(fileName, response);

  const schema = fs.readFileSync(`src/fixture/schema/${fileName}`);
  const validate = ajv.compile(schema);
  const valid = validate(response);

  if (!valid) {
    throw new Error(`Erro no contrato do schema. ERROS: ${validate.errors}`);
  }

  return 'Schema validado com sucesso!';
  
};