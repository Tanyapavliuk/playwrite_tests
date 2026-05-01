import test, { expect, Locator, Page } from '@playwright/test';

interface ElementsNav {
  locator: (page: Page) => Locator;
  name: string;
  anchor: string;
}

interface HeroButtons {
    locator: (page: Page) => Locator;
    name: string;
    attributes: {
                type: string, 
                text: string
            }
}

export class MainPage {
  readonly page: Page;
  readonly elementsNav: ElementsNav[];
  readonly heroButtons : HeroButtons[];

  constructor(page: Page) {
    this.page = page;
    this.elementsNav = [
      {
        locator: (page: Page) => page.getByRole('link', { name: 'Home' }),
        name: 'Home',
        anchor: '/',
      },
      {
        locator: (page: Page) => page.getByRole('link', { name: 'About me' }),
        name: 'About me',
        anchor: '/#about',
      },
      {
        locator: (page: Page) =>
          page.getByRole('link', { name: 'Work experience' }),
        name: 'Work experience',
        anchor: '/#work',
      },
      {
        locator: (page: Page) => page.getByRole('link', { name: 'Portfolio' }),
        name: 'Portfolio',
        anchor: '/portfolio',
      },
      {
        locator: (page: Page) =>
          page
            .getByRole('navigation')
            .getByRole('link', { name: 'Contact me' }),
        name: 'Contact me',
        anchor: '/#contact',
      },
    ];
    this.heroButtons = [
        {
            locator: (page: Page) => page.getByRole('link', { name: 'View test documentation' }),
            name: 'View test documentation',
            attributes: {
                type: 'href', 
                text: '/test-documentation'
            }
        }, 
        {
            locator: (page: Page) => page.getByRole('link', { name: 'Contact me' }).nth(1),
            name: 'Contact me',
            attributes: {
                type: 'href', 
                text: '/#contact'
        } }
    ]
  }

  async openMainPage () {
    await this.page.goto('https://tetiana-prylepska-qa.vercel.app/')
  }

  async checkNavElements () {
    for await (const {locator,name,anchor} of this.elementsNav) {
        test.step(`Check element ${name}`, async () => {
                await expect.soft(locator(this.page)).toBeVisible();
                await expect.soft(locator(this.page)).toContainText(name);
                await expect.soft(locator(this.page)).toHaveAttribute('href', anchor);
        });
    }
  }

  async checkHeroButtons () {
    for await (const {locator,name, attributes } of this.heroButtons) {
        test.step(`Check element ${name}`, async () => {
                await expect.soft(locator(this.page)).toBeVisible();
                await expect.soft(locator(this.page)).toContainText(name);
                await expect.soft(locator(this.page)).toHaveAttribute(attributes.type, attributes.text);
        });
    }
  }

  async clickOnContactMeButtun () {
      const contactMeButton = this.heroButtons[1].locator(this.page)
      await contactMeButton.click();
  }
}
