import { expect, it } from 'vitest';

it('should fail', () => {
  expect({ name: 'foo' }).toHaveProperty('name', 'bar');
});
