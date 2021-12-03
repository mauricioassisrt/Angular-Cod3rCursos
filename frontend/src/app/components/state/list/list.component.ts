import { Component, OnInit } from '@angular/core';
import { State } from '../state.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  states: State[]
  displayedColumns = ['id', 'name', 'initials', 'action']
  constructor(private statesService: StateService) { }

  ngOnInit(): void {
    this.statesService.read().subscribe(states => {
      this.states = states

    })
  }

}
