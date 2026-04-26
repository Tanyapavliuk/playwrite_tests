import { test, expect, Page } from '@playwright/test';

const elements = [
  {
    locator: (page:Page) => page.getByRole('link', { name: 'Home' }),
    name: 'Home',
    anchor: '/'
  },
  {
    locator: (page:Page) => page.getByRole('link', { name: 'About me' }),
    name: 'About me',
    anchor: '/#about'
  },
  {
    locator: (page:Page) => page.getByRole('link', { name: 'Work experience' }),
    name: 'Work experience',
    anchor: '/#work'
  },
  {
    locator: (page:Page) => page.getByRole('link', { name: 'Portfolio' }),
    name: 'Portfolio',
    anchor: '/portfolio'
  },
  {
    locator: (page:Page) => page.getByRole('navigation').getByRole('link', { name: 'Contact me' }),
    name: 'Contact me',
    anchor: '/#contact'
  }
];

test.describe('Test for navigation on the main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tetiana-prylepska-qa.vercel.app/');
  });

  test('Navigation: Verification of text, link of all nav elements', async ({
    page
  }) => {
    elements.forEach(({ locator, name, anchor }) => {
      test.step(`Check element ${name}`, async () => {
        await expect.soft(locator(page)).toBeVisible();
        await expect.soft(locator(page)).toContainText(name);
        await expect.soft(locator(page)).toHaveAttribute('href', anchor);

      });
    });
  });
});

test.describe('Test for the hero section on the main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tetiana-prylepska-qa.vercel.app/');
  });

  test('Element verification View test documentatio:', async ({ page }) => {
    await expect
      .soft(page.getByRole('link', { name: 'View test documentation' }))
      .toBeVisible();
    await expect
      .soft(page.getByRole('link', { name: 'View test documentation' }))
      .toContainText('View test documentation');
    await expect
      .soft(page.getByRole('link', { name: 'View test documentation' }))
      .toHaveAttribute('href', '/test-documentation');
  });
});
