it('should fail', async () => {
  expect({ name: 'foo' }).toHaveProperty('name', 'bar');
});
