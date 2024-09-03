import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

constructor(private uploadServive:UploadService){}

  selectedFile:File|null =null
  uploadResponse:string='';
  onFileChange(event:any){
     console.log(event.target.files[0]); //get the upload file details
    this.selectedFile=event.target.files[0];
  }

  upload(){
    if(this.selectedFile){
        this.uploadServive.upload(this.selectedFile).subscribe((res)=> {
        this.uploadResponse = 'File uploaded successfully!';

      },
      (error)=>{
        this.uploadResponse = 'File upload failed';
      }

    )
    } else {
      this.uploadResponse = 'No file selected!';
    }
  }
}
