import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   isOverlayVisible: boolean;
    public n: number = 1;
	
	constructor(){
		this.isOverlayVisible=false;
	}
   public disableDiv(){
	    setTimeout(() => {
      this.isOverlayVisible=false;
    }, 1000);
	this.isOverlayVisible=true;
   }
}
