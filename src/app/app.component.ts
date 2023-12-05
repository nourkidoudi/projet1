import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnaps!:FaceSnap[];
  title = 'TP2';
  ngOnInit(){
    this.mySnaps = [
      {
        title:'Archiblad',
        description:'Mon meilleur amis depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps:0,
        buttonText:'Oh snaps !'
      }
      ,
      {
        title:'Archiblad',
        description:'Mon meilleur amis depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps:0,
        buttonText:'Oh snaps !'
      }
      ,
      {
        title:'Archiblad',
        description:'Mon meilleur amis depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps:0,
        buttonText:'Oh snaps !'
      }
    ];
  }
}
