import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgIf,RouterModule,CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "Nothing Found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string = "/";

  constructor() { }

  ngOnInit(): void {
  }


}
