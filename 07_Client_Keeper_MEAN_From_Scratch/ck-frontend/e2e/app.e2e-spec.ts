import { CkFrontendPage } from './app.po';

describe('ck-frontend App', function() {
  let page: CkFrontendPage;

  beforeEach(() => {
    page = new CkFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
