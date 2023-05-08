import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Title';
  image1 = 'https://travel.usnews.com/images/GettyImages-117211856_ozkPCCP.jpg';
  image2 = 'https://www.sandals.com/blog/content/images/2022/11/Sandals-Grande-Antigua-Beach-Side-Couple.jpg';
  image3 = 'https://static.theceomagazine.net/wp-content/uploads/2019/12/23084741/benagil-sea-cave.jpg';

  constructor() { }

  ngOnInit() {
  }

}