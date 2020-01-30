import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-displist',
  templateUrl: './displist.component.html',
  styleUrls: ['./displist.component.css']
})
export class DisplistComponent implements OnInit {
@Input() wrk = [];
  constructor() { }

  ngOnInit() {
  }

}
