import { Component } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  public newMemberName: string = "";
  public members: string[] = [];
  public errorMessage: string = "";
  public numberOfTeams: number | "" = "";
  public teams: string[][] = []

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

  public onNumberOfTeamsInput(numberOfTeams: string): void {
    var num = Number(numberOfTeams);
    this.numberOfTeams = num;
  }

  public generateTeams(): void {
    //NOTE (mfragger) :: wth, why is there so many guard clauses?
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid input of teams";
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members";
      return;
    }

    this.errorMessage = "";
    const allMembers: string[] = [...this.members];

    while (allMembers.length > 0) {
      // const max: number = allMembers.length;
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randNumber: number = Math.floor(Math.random() * allMembers.length);

        //NOTE (mfragger) :: caching the length doesn't work since we're splicing the allMembers array.
        const member: string = allMembers.splice(randNumber, 1)[0];
        if (!member) {
          break;
        }
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = "";
  }
}
