
import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  standalone: true,
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  imports: [CommonModule]
})
export class UploadComponent implements OnInit {
  static shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File | any = null;

  constructor(private uploadSer: UploadService) { }

  ngOnInit() {
  }
  onChange(event : any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.uploadSer.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                UploadComponent.shortLink = event.dbPath;

                this.loading = false; // Flag variable
            }

        }

    );


}
}
