import { JqNg2Page } from './app.po';

describe('jq-ng2 App', function() {
  let page: JqNg2Page;

  beforeEach(() => {
    page = new JqNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
