import { FaceSnap } from './../models/face-snap.model';
import { Component ,OnInit } from '@angular/core';
import { FaceSnapListService } from '../FaceSnapList/face-snap-list.service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsService: FaceSnapListService) { }
  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
