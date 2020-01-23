import { DispatcherService } from 'src/app/dispatcher.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { error } from 'util';

@Component({
  selector: 'app-create-space',
  templateUrl: './create-space.component.html',
  styleUrls: ['./create-space.component.scss']
})
export class CreateSpaceComponent implements OnInit {

  SpaceForm: FormGroup;  
  selectSpaceType
  disabledSubmitButton: boolean = true
  fileToUpload: File = null;
  docs: File;
  length: File;
  uploadedFiles: Array <File>;
  @HostListener('input') oninput() {
      if (this.SpaceForm.valid) {
        this.disabledSubmitButton = false;
      }
  }
  constructor(private dispatcher: DispatcherService, private fb : FormBuilder, private flashMessage: FlashMessagesService) {   
    this.SpaceForm = fb.group({
      'spaceType': ['', Validators.required],      
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'img': ['', Validators.required],
      'price': ['', Validators.required],
      'location': ['', Validators.required],
      'tv': false,
      'wifi': false,
      'projector': false,
      'whiteBoard': false,
      'breakfast': false,
      });
    
  }
  handleFileInput(event) {
    console.log(event);
    this.uploadedFiles = event.target.files;
        
   
}
  onSubmit() {
    const formData = new FormData();
    console.log(this.uploadedFiles)
    console.log(this.uploadedFiles.length)
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }  
    console.log(formData.getAll('uploads'));
    this.dispatcher.uploadImage( formData)
        .subscribe((res) => {
            console.log(res);
        })

    //   console.log(this.SpaceForm.value)
    //   const length : any = <File>event.target.files.length;
    //   const formdata = new FormData();
    //   for (let i = 0; i < length; i++) {
    //     formdata.append('docs'+[i], this.docs[i], this.docs[i].name );
    //     formdata.append('length', this.length)
    // } 
    // console.log(formdata);   
    // console.log(this.docs.name)
      // this.dispatcher.addSpace(this.SpaceForm.value).subscribe(res =>{
      //   this.successMsg()
      //   this.SpaceForm.reset()
      //   this.disabledSubmitButton = true;
      // },error =>{
      //   console.log(error.error)
      //   this.errMsg(error)
      // })
   
  }
  get spaceType() {
    return this.SpaceForm.get('spaceType');
  }
  get name() {
    return this.SpaceForm.get('name');
  }
  get description() {
    return this.SpaceForm.get('description');
  }
  get img() {
    return this.SpaceForm.get('img');
  }
  get price() {
    return this.SpaceForm.get('price');
  }
  get location() {
    return this.SpaceForm.get('location');
  }
  get tv() {  
   
    return this.SpaceForm.get('tv');
  }
  get wifi() {
    return this.SpaceForm.get('wifi');
  }
  get projector() {
    return this.SpaceForm.get('projector');
  }
  get breakfast() {
    return this.SpaceForm.get('breakfast');
  }
  get whiteBoard() {
    return this.SpaceForm.get('whiteBoard');
  }
 

  ngOnInit() {
    this.selectSpaceType = [
      { value: 'Work Spaces', label: 'Work Spaces' },
      { value: 'Event Spaces', label: 'Event Spaces' },
      { value: 'Fun Spaces', label: 'Fun Spaces' },
      { value: 'Bed Spaces', label: 'Bed Spaces' },
      ];
  }
  successMsg():void {
    this.flashMessage.show(`New space successfully added.`, { cssClass: 'alert-success', timeout: 20000 });
  }
  errMsg(error):void {

    this.flashMessage.show(`Error creating space ${error.error}`, { cssClass: 'alert-danger', timeout: 20000 });
  }
 


}
