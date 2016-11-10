import { PdfThumbnailPage } from './app.po';

describe('pdf-thumbnail App', function() {
  let page: PdfThumbnailPage;

  beforeEach(() => {
    page = new PdfThumbnailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
