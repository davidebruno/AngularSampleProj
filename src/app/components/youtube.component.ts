import {Component, Input} from '@angular/core';
import { YoutubeElement } from 'app/model/youtube.model';

@Component({
    selector: 'youtube-elem',
    template: `
            <div  class="col-md-4 col-sm-12">
                <div  class="card">
                    <div  class="img-container">
                        <img class="youtubeimg" src={{ytElement.urlImg}}>
                    </div>
                    <div  class="video-desc">
                        <b>{{ytElement.vidDesc}}</b><br>
                        {{ytElement.views}} views<br>
                        {{ytElement.like}} likes<br>
                        {{ytElement.updated}}
                    </div>
                </div>
             </div>
    `,
    styles: [` .youtubeimg {
                              width: 120px;
                              height: 90px;
                              }
                .card {
                        display: -webkit-inline-box;
                        width: 100%;
                        margin-bottom: 25px;
                        box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
                        border: 0;
                    }
                .video-desc {
                             font-size: 12px;
                             padding: 5px 10px;
                         }
    `]
})
export class YoutubeComponent {
    @Input() ytElement: YoutubeElement;
}