import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'todo_list_Angular';
  btnDisabled = true;
  register={
    name:'',
  }
  activitys: string[] = [];
  newActivity ='';

  addActivity(){
    this.activitys.push(this.newActivity);
    this.newActivity = '';
  }
  deleteActivity(index:number){
    this.activitys.splice(index,1);
  }
  onRegister(){
    console.log(this.register);
  }
}
