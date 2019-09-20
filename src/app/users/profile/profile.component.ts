import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {}

  ngOnInit() {
    const firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    const lastName = new FormControl(
      this.authService.currentUser.lastName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );

    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName)
        .subscribe(() => {
          this.router.navigate(['/events']);
          this.toastr.success('Profile updated.');
        });
    }
  }

  cancel() {
    if (this.canBeSubmitted()) {
      const canLeave = window.confirm('Do you want to leave before saving data?');
      if (canLeave) {
        this.router.navigate(['/events']);
      }
    } else {
      this.router.navigate(['/events']);
    }
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.toastr.success('You logged out successfully.');
        this.router.navigate(['/user/login']);
      });
  }

  canBeSubmitted(): boolean {
    return this.profileForm.valid && this.profileForm.dirty;
  }

  getValidationMessage(controlName: string): string {
    if (this.isRequiredValidation(controlName)) {
      return 'Required';
    }

    if (this.isPatternValidation(controlName)) {
      return 'Must start with a letter';
    }

    return '';
  }

  isControlInvalid(controlName: string): boolean {
    return this.isRequiredValidation(controlName) ||
           this.isPatternValidation(controlName);
  }

  private isRequiredValidation(controlName: string): boolean {
    return this.isTouchedAndInvalid(controlName) &&
      this.getControl(controlName).errors.required;
  }

  private isPatternValidation(controlName: string): boolean {
    return this.isTouchedAndInvalid(controlName) &&
      this.getControl(controlName).errors.pattern;
  }

  private isTouchedAndInvalid(controlName: string): boolean {
    return this.getControl(controlName).invalid &&
      this.getControl(controlName).touched;
  }

  private getControl(controlName: string): AbstractControl {
    return this.profileForm.get(controlName);
  }

}
