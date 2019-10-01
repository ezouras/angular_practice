import { RoutingDemoPage } from './app.po';

describe('routing-demo App', () => {
  let page: RoutingDemoPage;

  beforeEach(() => {
    page = new RoutingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
