import { test, expect } from '@playwright/test';

test('Main menu, Header is visible:', async ({ page }) => {
  await page.goto('https://tetiana-prylepska-qa.vercel.app/');
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About me' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Work experience' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Portfolio' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Contact me' })).toBeVisible();
});

test('Main menu, correct names:', async ({ page }) => {
  await page.goto('https://tetiana-prylepska-qa.vercel.app/');
  await expect(page.getByRole('navigation')).toContainText('Home');
  await expect(page.getByRole('navigation')).toContainText('About me');
  await expect(page.getByRole('navigation')).toContainText('Work experience');
  await expect(page.getByRole('navigation')).toContainText('Portfolio');
  await expect(page.getByRole('navigation')).toContainText('Contact me');
  await expect(page.getByRole('link', { name: 'View test documentation' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View test documentation' })).toContainText('View test documentation');
});

test('Main menu, links:', async ({ page }) => {
  await page.goto('https://tetiana-prylepska-qa.vercel.app/');

  await expect(page.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  await expect(page.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '/#about');
  await expect(page.getByRole('link', { name: 'Work experience' })).toHaveAttribute('href', '/#work');
  await expect(page.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/portfolio');
});

test('Correct link:', async ({ page }) => {
  await page.goto('https://tetiana-prylepska-qa.vercel.app/');

  await expect.soft(page.getByRole('link', { name: 'View test documentation' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'View test documentation' })).toContainText('View test documentation');
  await expect.soft(page.getByRole('link', { name: 'View test documentation' })).toHaveAttribute('href', '/test-documentation');
});