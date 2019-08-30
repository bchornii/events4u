import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { restrictedWordsValidator } from 'src/app/validators/restricted-words.validator';

@Component({
  selector: 'e4u-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output() sessionCreated = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newSessionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [
        Validators.required,
        Validators.maxLength(400),
        restrictedWordsValidator('foo', 'looser', 'crap')]
      ]
    });
  }

  saveSession() {
    this.sessionCreated.emit(this.newSessionForm.value);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

  isRequired(controlName: string): boolean {
    return this.isInvalid(controlName) &&
           this.getControl(controlName).errors.required;
  }

  restrictedWords(controlName: string): any {
    const control = this.getControl(controlName);
    if (control.errors) {
      return this.getControl(controlName).errors.restrictedWords;
    }
    return '';
  }

  isInvalid(controlName: string): boolean {
    return this.getControl(controlName).invalid &&
      this.getControl(controlName).touched;
  }

  private getControl(controlName: string): AbstractControl {
    return this.newSessionForm.get(controlName);
  }
}
