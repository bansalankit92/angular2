import { Component } from '@angular/core';

import {BrowserModule, DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pdf-viewer-app',
  templateUrl: './pdf-viewer.component.html',
})
export class MyPdfViewerComponent {
  title = 'app works!';
  pdfSrc ='https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  page: number = 1;
  // pdfShow=false;
  pageurl:SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.pageurl=this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
    //this.pdfSrc=this.domSanitizer.bypassSecurityTrustResourceUrl( 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf');
  }


  /*open(content) {
    this.modalService.open(content).result.then((result) => {
      //  this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }*/
}

