import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../state.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  state: State

  constructor(private stateSerivce: StateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.stateSerivce.readById(id).subscribe(state => {
      this.state = state
    })
    
  }
 
  updateState() {
    this.stateSerivce.update(this.state).subscribe(() => {
      this.stateSerivce.showMessage('Estado atualizado com sucesso !!')
      this.router.navigate(['/state'])
    })
  }

  cancelState(): void {
    this.router.navigate(['/state'])
  }

}
