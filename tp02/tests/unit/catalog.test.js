const {
  getProductById,
  checkStock
} = require('../../src/catalog/catalogService');

test('getProductById returns the correct product for a valid id', async () => {
  const product = await getProductById(1);

  expect(product).toEqual({
    id: 1,
    name: 'Casque Bluetooth',
    category: 'audio',
    price: 89.9,
    stock: 12
  });
});

test('getProductById rejects an unknown id', async () => {
  expect.assertions(1);

  await expect(getProductById(8)).rejects.toThrow('Produit introuvable : 8');
});

test('checkStock returns false when stock is insufficient', async () => {
  await expect(checkStock(2, 1))
    .resolves
    .toBe(false);
});