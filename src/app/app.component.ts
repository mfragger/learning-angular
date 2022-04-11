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
  public numberOfTeams: number | "" = "";
  private teams: string[][] = []

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

  public onNumberOfTeamsInput(numberOfTeams: string) {
    var num: number = Number(numberOfTeams);
    this.numberOfTeams = num;
  }
  public generateTeams(): void {

    //wth, why is there so many guard clauses?
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }
    const allMembers = [...this.members];

    const max = this.numberOfTeams;

    for (let i = 0; i < max; i++) {
      const randNumber = Math.floor(Math.random() * max);
      const member = allMembers.splice(randNumber, 1)[0];

      if (this.teams[i]) {
        this.teams[i].push(member);
      } else {
        this.teams[i] = [member];
      }
    }
    console.log(this.teams);
  }
}
