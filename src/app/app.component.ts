import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public newMemberName: string = "";
  public members: string[] = [];
  public errorMessage: string = "";

  public addMember(): void {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
    console.log(this.members);
  }

  public onInput(member: string): void {
    this.newMemberName = member;
  }
}
