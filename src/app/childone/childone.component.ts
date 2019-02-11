import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent {

  @Input()
  ctMsg: string;

  @Input('ctArray')
  myctArray: Array<string>

  @Input('studentAddMsg')
  addMsg: string;

  @Output('addStudentEvent')
  addStdEvent = new EventEmitter<Student>();

  @Output()
  sendMsgEvent = new EventEmitter<string>();

  student = new Student();
  
  childTitle = '---Child One---';
  message = 'Send Message'
  msg: string;

  addStudent() {
    this.addStdEvent.emit(this.student);
  }
  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }
}
