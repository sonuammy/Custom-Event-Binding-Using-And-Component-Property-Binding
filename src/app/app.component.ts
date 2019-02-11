import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  message: string = 'Sharing Data from parent to child and child to parent ';
  parentTitle = 'Parent Component';

  //Property for child component one
  cityMsg = 'Indian City Names';
  cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  //Property for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Narendra', 'Modi');

  //Property used in parent
  stdFullName = '';
  sum = '';
  msg = '';

  saveData(std) {
    this.stdFullName = std.fname + ' ' + std.lname;
  }
  printMsg(msg) {
    this.msg = msg;
  }
  printSum(res) {
    this.sum = res;
  }
}  