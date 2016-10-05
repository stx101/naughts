import { NaughtsPage } from './app.po';

describe('naughts App', function() {
  let page: NaughtsPage;

  beforeEach(() => {
    page = new NaughtsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
