import { DispatcherService } from 'src/app/dispatcher.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-space',
  templateUrl: './create-space.component.html',
  styleUrls: ['./create-space.component.scss']
})
export class CreateSpaceComponent implements OnInit {

  SpaceForm: FormGroup;  
  selectSpaceType = [
    { value: 'Work Spaces', label: 'Work Spaces' },
    { value: 'Event Spaces', label: 'Event Spaces' },
    { value: 'Fun Spaces', label: 'Fun Spaces' },
    { value: 'Bed Spaces', label: 'Bed Spaces' },
    ];
    disabledSubmitButton: boolean = true
    @HostListener('input') oninput() {

      if (this.SpaceForm.valid) {
        this.disabledSubmitButton = false;
      }
    }
  constructor(private dispatcher: DispatcherService, private fb : FormBuilder) {
   
    this.SpaceForm = fb.group({
      'spaceType': ['', Validators.required],      
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'img': ['', Validators.required],
      'price': ['', Validators.required],
      'location': ['', Validators.required],
      'tv': ['', Validators.requiredTrue],
      'wifi': ['', Validators.requiredTrue],
      'projector': ['', Validators.requiredTrue],
      'whiteBoard': ['', Validators.requiredTrue],
      'breakfast': ['', Validators.requiredTrue],
      });
    
  }
  onSubmit() {
      console.log(this.SpaceForm.value)
      this.disabledSubmitButton = true;
   
  }

  ngOnInit() {
  }

}
