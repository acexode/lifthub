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
  categoryType
  bedSpace
  workSpace
  eventSpace
  funSpace
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
      'category': ['', Validators.required],
      'description': ['', Validators.required],
      'img': ['', Validators.required],
      'price': ['', Validators.required],
      'location': ['', Validators.required],
      'tv':  ['', Validators.required],
      'wifi':  ['', Validators.required],
      'projector':  ['', Validators.required],
      'whiteBoard':  ['', Validators.required],
      'breakfast':  ['', Validators.required],
      });
    
  }
  handleFileInput(event) {
    this.uploadedFiles = event.target.files;
    console.log(event.target.files);
  }
  onChange(value) {
    switch(this.spaceType.value) {
      case this.selectSpaceType[0].value:
        this.categoryType = this.workSpace       
        break;
      case this.selectSpaceType[1].value:
        this.categoryType = this.eventSpace       
        break;
      case this.selectSpaceType[2].value:
        this.categoryType = this.funSpace      
        break;
      case this.selectSpaceType[3].value:
        this.categoryType = this.bedSpace        
        break;      
      default:
        this.categoryType = this.workSpace
    }    
    //this.categoryType = value
  }
  onSubmit() {
    const formData = new FormData();   
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }    
    
    this.dispatcher.uploadImage( formData)
        .subscribe((res : any) => {          
          console.log(res.images);
            let  form  = {
              'spaceType': this.SpaceForm.value.spaceType,      
              'name': this.SpaceForm.value.name,
              'category': this.SpaceForm.value.category,
              'description': this.SpaceForm.value.description,
              'img': res.images,
              'price':this.SpaceForm.value.price,
              'location': this.SpaceForm.value.location,
              'tv': this.SpaceForm.value.tv,
              'wifi': this.SpaceForm.value.wifi,
              'projector': this.SpaceForm.value.projector,
              'whiteBoard': this.SpaceForm.value.whiteBoard,
              'breakfast': this.SpaceForm.value.breakfast,
              }
              console.log(form);
            this.dispatcher.addSpace(form).subscribe(res =>{
              this.successMsg()
              console.log(res)
              this.SpaceForm.reset()
            }, error =>{
              this.errMsg(error)
              console.log(res)
            })
        })   
   
  }
  get spaceType() {
    return this.SpaceForm.get('spaceType');
  }
  get category() {
    return this.SpaceForm.get('category');
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
      
      this.bedSpace = [      
      { value: 'Single bedrooms with one bed', label: 'Single bedrooms with one bed' },
      { value: 'Single bedrooms with double beds', label: 'Single bedrooms with double beds' },
      { value: 'Executive bedrooms', label: 'Executive bedrooms' },
      { value: 'Executive suites', label: 'Executive suites' },
      { value: 'Luxury suite', label: 'Luxury suite' },
      { value: 'Apartments', label: 'Apartments' },
      ];
      this.workSpace = [       
        { value: 'Private offices', label: 'Private offices' },
        { value: 'Shared offices', label: 'Shared offices' },
        { value: 'Co-working spaces', label: 'Co-working spaces' },
        { value: 'Open workspaces', label: 'Open workspaces' },
        ];
      this.eventSpace = [      
        { value: 'Picnics', label: 'Picnics' },
        { value: 'Meetings', label: 'Meetings' },
        { value: 'Private meeting', label: 'Private meeting' },
        { value: 'Board meeting', label: 'Board meeting' },
        { value: 'Group meeting', label: 'Group meeting' },
        { value: 'Receptions', label: 'Receptions' },
        { value: 'Conference spaces', label: 'Conference spaces' },
        { value: 'Trainings', label: 'Trainings' },
        { value: 'Seminars', label: 'Seminars' },
        { value: 'Meetups', label: 'Meetups' },
        { value: 'Lectures', label: 'Lectures' }
        ];
      this.funSpace = [      
        { value: 'Restaurant', label: 'Restaurant' },
        { value: 'Pub', label: 'Pub' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Coffee shop', label: 'Coffee shop' },
        { value: 'Library', label: 'Library' },
        { value: 'Movies', label: 'Movies' },
        { value: 'Concerts', label: 'Concerts' },
        { value: 'Boat ride', label: 'Boat ride' },
        { value: 'Book a club', label: 'Book a club' },
        { value: 'Book a table at a club', label: 'Book a table at a club' },
        { value: 'Bonfire night', label: 'Bonfire night' },
        { value: 'Barbecue party', label: 'Barbecue party' },
        { value: 'Stargazing', label: 'Stargazing' },
      ]
      this.categoryType = this.workSpace

  }
  successMsg():void {
    this.flashMessage.show(`New space successfully added.`, { cssClass: 'alert-success', timeout: 20000 });
  }
  errMsg(error):void {

    this.flashMessage.show(`Error creating space ${error.error}`, { cssClass: 'alert-danger', timeout: 20000 });
  }
 


}
