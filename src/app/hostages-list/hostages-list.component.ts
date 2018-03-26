import { Hostage } from './../models/hostage.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostages-list',
  templateUrl: './hostages-list.component.html',
  styleUrls: ['./hostages-list.component.css']
})
export class HostagesListComponent implements OnInit {

  hostages: Hostage[] = [
    new Hostage(1, "Arturito"),
    new Hostage(2, "Monica"),
    new Hostage(3, "Alison")
  ]
  constructor() { }

  ngOnInit() {
  }

}
