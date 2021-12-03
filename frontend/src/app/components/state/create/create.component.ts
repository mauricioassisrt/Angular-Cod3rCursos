import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '../state.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 
  state: State = {
    name: '',
    initials: ''
  }
  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit(): void {

  }

  createState(): void {
    this.stateService.create(this.state).subscribe(() => {
      this.stateService.showMessage('Estado inserido com sucesso !!')
      this.router.navigate(['/state'])
    });
  }
  cancelState(): void {
    this.router.navigate(['/state'])
  }

}
