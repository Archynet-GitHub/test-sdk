import {Component, OnInit} from '@angular/core';
import {WindowRefService} from './window-ref.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-sdk';
  constructor(private windowRef:WindowRefService){
    
  }
  ngOnInit() {
    this.windowRef.getNativeWindow().extAsyncInit =  ()=> {
      // the Messenger Extensions JS SDK is done loading
      alert("sdk loaded successfully"); 
      this.title="sdk loaded succefully";
      console.log("sdk loaded successfully");
    };
  }
}
