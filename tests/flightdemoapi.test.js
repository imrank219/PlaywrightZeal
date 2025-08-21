const { test, expect } = require('@playwright/test');

test('Search flights from Boston to London using direct API call', async ({ request }) => {
  // Construct the full URL with query params
  const from = 'Boston';
  const to = 'London';
  const url = `https://blazedemo.com/reserve.php?fromPort=${from}&toPort=${to}`;

  // Send GET request to reserve.php
  const response = await request.get(url);
  expect(response.status()).toBe(200);

  // Read and inspect the response body
  const body = await response.text();

  // ✅ Assert expected values are present in the HTML
  expect(body).toContain(`Flights from ${from} to ${to}`);
  expect(body).toContain('Choose This Flight'); // table exists
  expect(body).toContain('purchase.php'); // booking action form

  console.log('✅ Flight search API returned expected results.');
});


