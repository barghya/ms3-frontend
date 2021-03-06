import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ms3-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  public onToggleSidenav = () => {
    console.log("Toggle event...");
    this.sidenavToggle.emit();
  }

}
