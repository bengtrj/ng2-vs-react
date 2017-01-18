import { HandyMenuPage } from './app.po';

describe('handy-menu App', function() {
  let page: HandyMenuPage;

  beforeEach(() => {
    page = new HandyMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
