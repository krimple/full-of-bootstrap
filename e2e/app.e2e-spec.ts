import { FullOfBootstrapPage } from './app.po';

describe('full-of-bootstrap App', () => {
  let page: FullOfBootstrapPage;

  beforeEach(() => {
    page = new FullOfBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
