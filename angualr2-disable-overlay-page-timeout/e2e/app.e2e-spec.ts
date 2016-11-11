import { Ng2SamplesPage } from './app.po';

describe('ng2-samples App', function() {
  let page: Ng2SamplesPage;

  beforeEach(() => {
    page = new Ng2SamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
