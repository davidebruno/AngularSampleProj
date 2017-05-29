import {Component} from '@angular/core';
import {Base} from 'app/utility/base';
import {SortPipe} from 'app/utility/sort.pipe';
import {YoutubeElement} from 'app/model/youtube.model';
import {YoutubeComponent} from 'app/components/youtube.component';
import {DelayDisplayComponent} from 'app/utility/delaydisplay.component';

@Component({
  selector: 'youtube-list',
  template: `
            <div class="container">
            <h3 class='title'> Display each Component with one second delay from the next one</h3>
            <br />
            <div class="row">
                <div *ngFor = "let ytEl of arrYTElements; let i = index; ">
                    <delaydisplay [millisdelay] = 'i * 1000'>
                      <youtube-elem [ytElement]='ytEl' ></youtube-elem>
                    </delaydisplay>
                </div>
            </div>
            </div>
             `,
})
export class YoutubeListComponent extends Base{

  ytEl1 = new YoutubeElement('https://i.ytimg.com/vi/naUppHrHJpI/hqdefault.jpg', 'The Price is Right - New Pli....',
                             825933, 9792, '2 days ago' );
  ytEl2 = new YoutubeElement('https://i.ytimg.com/vi/qy-tCD_toLc/hqdefault.jpg', 'Use Your Head Challenge ft. ....',
                             674399, 27046, 'a day ago' );
  ytEl3 = new YoutubeElement('https://i.ytimg.com/vi/JerBJ9Xbdto/hqdefault.jpg', 'Terrible DJs | Rudy Mancuso,....',
                             1650362, 113402, '21 hours ago' );
  ytEl4 = new YoutubeElement('https://i.ytimg.com/vi/gIN1qYYk5s8/hqdefault.jpg', 'Thai BREAKFAST Street Food T....',
                             212180, 5773, 'a day ago' );
  ytEl5 = new YoutubeElement('https://i.ytimg.com/vi/QChWIFi8fOY/hqdefault.jpg', 'David Fincher - Invisible De....',
                             250353 , 18200 , '21 hours ago' );
  ytEl6 = new YoutubeElement('https://i.ytimg.com/vi/Gz2aPKmWqAI/hqdefault.jpg', 'Derek Hough‘s Run - Celebrit....',
                             217699 , 2388 , '2 days ago' );
  ytEl7 = new YoutubeElement('https://i.ytimg.com/vi/A2FsgKoGD04/hqdefault.jpg', 'Real Life Trick Shots | Dude....',
                             11244928, 533582, '2 days ago' );
  ytEl8 = new YoutubeElement('https://i.ytimg.com/vi/bW2e_SecXt8/hqdefault.jpg', 'Guess Her Age Challenge (We ....',
                             3211497, 81074, '3 days ago' );
  ytEl9 = new YoutubeElement('https://i.ytimg.com/vi/Jl5DevKdmDw/hqdefault.jpg', 'THE MASK SINGER หน้ากากนักร้',
                             218337, 37074, '3 days ago' );

  arrYTElements: YoutubeElement[] = [this.ytEl1,this.ytEl2,this.ytEl3,this.ytEl4,this.ytEl5,this.ytEl6,this.ytEl7,this.ytEl8,this.ytEl9];

  constructor(){
    super();
  }
}