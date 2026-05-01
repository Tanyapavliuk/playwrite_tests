import{test} from '../fixture/mainPageFixture'
import { MainPage } from '../models/MainPage'

let mainPage:MainPage

test.describe('Test for navigation on the main page', () => {
  test.beforeEach(async ({page}) => {
    mainPage = new MainPage(page)
    await mainPage.openMainPage()
  })

  test('Navigation: Verification of text, link of all nav elements', async () => {
    await mainPage.checkNavElements()
  });

  test('Verification: Of buttons on the Hero section', async ()=>{
    await mainPage.checkHeroButtons()
  });
});