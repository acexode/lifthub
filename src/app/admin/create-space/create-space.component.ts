import { DispatcherService } from 'src/app/dispatcher.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

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
  constructor(private dispatcher: DispatcherService) {

    this.SpaceForm = new FormGroup({
      spaceType: new FormControl('', Validators.email),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      wifi: new FormControl('', Validators.required),
      breakfast: new FormControl('', Validators.required),
      whiteBoard: new FormControl('', Validators.required),
      projector: new FormControl('', Validators.required),
      tv: new FormControl('', Validators.required),
    });

  }

  ngOnInit() {
  }

}
