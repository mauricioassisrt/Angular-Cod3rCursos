import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
  @Input() title?: string = '';
  @Input() customInnerStyles?: string = '';

  constructor() { }

  ngOnInit(): void {
  }


}
