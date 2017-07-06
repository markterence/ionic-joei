import { Component } from '@angular/core';


//Test PopOver
import { JPopOver } from "../../include/pop-up";
import { PopoverPage } from "../popover/popover";
//End PopOver Test

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public popOver: JPopOver) {

  }

  showHomePopOver(ev){
    this.popOver.showPopover(PopoverPage, ev);
  }
}
