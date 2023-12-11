import { expect, it } from 'vitest';

it('should fail', async () => {
  expect({ name: 'foo' }).toHaveProperty('name', 'bar');
});
