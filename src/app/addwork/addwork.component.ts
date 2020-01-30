import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent implements OnInit {

  enterwork = '';

  @Output() workadd = new EventEmitter();
  constructor() { }
  addt()  {

    const w = {wd : this.enterwork};

    this.workadd.emit(w);
  }
  ngOnInit() {
  }

}
