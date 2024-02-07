import { expect, spec } from 'pactum';
import { setupRequestPeople } from '../config/config-request';
import { schemaValidation } from '../helpers/schema.helper';

before(async () => {
    await setupRequestPeople();
})

describe('research peoples', () => {

    it('research people with valid id', async () => {
       const response = await spec().get('1').expectStatus(200);
       const schema = await schemaValidation('research-people.json', response.body);
       expect(schema, 'Schema validado com sucesso!');
    });
})

