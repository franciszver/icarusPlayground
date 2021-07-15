import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { IcarusPlaygroundCrudService } from './icarus-playground-crud.service';
import { Contact } from './shared/models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'icarusPlayground';
  getCall = new Subscription;
  displayMe = new Array<Contact>();

  constructor(private icarusPlaygroundCrud: IcarusPlaygroundCrudService) {  }
  getAll() {
    this.getCall = this.icarusPlaygroundCrud.getInfo().subscribe(retrievedAll => {
      this.displayMe = retrievedAll;
    });
  }

  clearDisplay() {
    this.displayMe = [];
  }

  onDestroy() {
      this.getCall.unsubscribe();
  }
}
