import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadVideoService } from 'src/app/services/upload-video.service';

@Component({
  standalone: true,
  selector: 'app-upload-vid',
  templateUrl: './upload-vid.component.html',
  styleUrls: ['./upload-vid.component.css'],
  imports: [CommonModule]
})
export class UploadVidComponent implements OnInit {
  static returnedLink: string = "";
  loading: boolean = false; // Flag variable
  file: File | any = null;
  constructor(private uploadVidSer:UploadVideoService) { }

  ngOnInit(): void {
  }
  onChange(event : any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.uploadVidSer.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                UploadVidComponent.returnedLink = event.dbPath;

                this.loading = false; // Flag variable
            }

        }

    );


}

}
