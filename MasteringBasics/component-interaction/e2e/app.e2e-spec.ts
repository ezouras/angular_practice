import { ComponentInteractionPage } from './app.po';

describe('component-interaction App', () => {
  let page: ComponentInteractionPage;

  beforeEach(() => {
    page = new ComponentInteractionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
