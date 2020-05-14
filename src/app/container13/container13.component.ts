import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container13',
  templateUrl: './container13.component.html',
  styleUrls: ['./container13.component.css']
})
export class Container13Component implements OnInit {

  database2 = [
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: '4 organic ways to improve your website KPIs',
      read: 'Read Story'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: 'How to turn your next event into a video content goldmine',
      read: 'Read Store'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: 'How to quickly turn your podcast into a video script',
      read: 'Read Story'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
