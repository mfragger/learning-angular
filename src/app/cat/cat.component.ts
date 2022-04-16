import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { Cat } from '../models/cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  //yeah no
  public catFact: any;

  constructor(
    private catService: CatService
  ) { }

  ngOnInit(): void {
    this.getFact();
  }
  getFact(): void {
    this.catService.getFact().subscribe(catFact => this.catFact = catFact);
  }
}
