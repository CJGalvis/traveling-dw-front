import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent implements OnInit {

  @Input() label!: string;
  @Input() controlName = "";
  @Input() parentForm = new FormGroup({});
  @Input() readonly: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  get control(): FormControl {
    return this.parentForm.get(this.controlName) as FormControl;
  }

}
