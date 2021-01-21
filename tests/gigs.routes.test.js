const router = require('../routes/gigs.routes');

test('should be a defined function', () => {
  expect(router).toBeDefined();
});

test('should not be null', () => {
  expect(router).not.toBeNull();
});

