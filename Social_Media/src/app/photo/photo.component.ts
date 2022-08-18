import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  public video = [
    { vName: 'Male', photo: 'assets/male_avatar.png', Like: 0, Dislike: 0 },
    { vName: 'Female', photo: 'assets/female_avatar.png', Like: 0, Dislike: 0 }
  ]

  ngOnInit(): void {
  }

  public LikeCounter(video: any) {
    video.Like++;
  }

  public DisikeCounter(video: any) {
    video.Dislike++;
  }
}