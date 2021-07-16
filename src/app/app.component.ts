import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { IcarusPlaygroundCrudService } from './icarus-playground-crud.service';
import { Contact } from './shared/models/contact.model';
import { TrainingLog } from './shared/models/trainingLog.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'icarusPlayground';
  getCall = new Subscription;
  hardCodedData = new Array<Contact>();
  sqlData = new Array<Contact>();
  workRawRampData = new Array();
  workRampParsedArray = new Array<TrainingLog>();



  constructor(private icarusPlaygroundCrud: IcarusPlaygroundCrudService) {  }
  getAll() {
    this.getCall = this.icarusPlaygroundCrud.getInfo().subscribe(retrievedAll => {
      this.hardCodedData = retrievedAll;
    });
  }

  getAllSql() {
    this.getCall = this.icarusPlaygroundCrud.getInfoSql().subscribe(retrievedAllSql => {
      this.sqlData = retrievedAllSql;
    });
  }

  getWorkRampData() {
    this.getCall = this.icarusPlaygroundCrud.getDataInfo().subscribe(retrivedData => {
      console.log(retrivedData);
      this.workRawRampData = retrivedData.logs;
      this.parseWorkRampData();
    });
  }

  clearDisplay() {
    this.hardCodedData = [];
    this.sqlData = [];
    this.workRampParsedArray = [];
  }

  onDestroy() {
      this.getCall.unsubscribe();
  }

  parseWorkRampData() {
    for(let i = 0; i < this.workRawRampData.length; i++) {
      let training = new TrainingLog;
      training.time = this.workRawRampData[i].time_spent;
      let contentString = this.workRawRampData[i].content_url.toString();
      let contentStringArray = contentString.split('/');
      training.id = contentStringArray[2];
      training.trainingType = contentStringArray[1];
      this.workRampParsedArray.push(training);
      console.log(training);
    }
  }

}
