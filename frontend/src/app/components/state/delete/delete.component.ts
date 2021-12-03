import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../state.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  state: State
  constructor(private stateService: StateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.stateService.readById(id).subscribe(state => {
      this.state = state
    })
  }
  cancelState() {
    this.router.navigate(['/state']);
  }

  deleteState(){
    this.stateService.delete(this.state).subscribe(state=>{
      this.stateService.showMessage('Estado apagado com sucesso !!')
      this.router.navigate(['/state'])
    })
    
  }
}
