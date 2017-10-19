import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Celebrity } from "../celebrity";
import { DataServiceService } from '../services/data-service.service';
import { CelebForm } from '../businesslogic/CelebForm';

@Component({
  selector: 'celebform',
  templateUrl: './celebform.component.html',
  styles: []
})
export class CelebformComponent extends CelebForm {

  constructor(dataService: DataServiceService) {
    super(dataService);
  }
  
}
