import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService }                 from 'ngx-bootstrap/modal';
import { BsModalRef }                     from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="App"
  description="One framework. Mobile & desktop."
  public modalRef: BsModalRef
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }
}
