import { registerNewAgent, getFactions } from '$lib/client';


describe('registerNewAgent', () => {
  test('test failed registration', async () => {
    const error = await registerNewAgent("PONDERSTIBBONS", "QUNTUM")
    console.log(error)
  });


});

describe('getFactions', () => {
  test('test getFactions success', async () => {
    const response = await getFactions()
    console.log(response.content.data[0])
  });
});