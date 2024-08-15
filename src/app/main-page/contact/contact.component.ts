import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  translate = inject(TranslationService);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isValid = false;
  isEmailValid = false;
  isCheckbox = false;
  formSubmitted = false;
  mailTest = true;

  post = {
    endPoint: 'https://haehnlein-alexander.org/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  validateFormInput() {
    if (
      this.contactData.name &&
      this.isEmailValid &&
      this.contactData.message &&
      this.isCheckbox
    ) {
      this.isValid = true;
    } else {
      this.isValid = false;
      this.formSubmitted = false;
    }
  }

  validateEmail(email: NgModel) {
    if (email.valid) {
      this.isEmailValid = true;
      this.validateFormInput();
    } else {
      this.isEmailValid = false;
      this.validateFormInput();
    }
  }

  isCheckboxChecked() {
    this.isCheckbox = !this.isCheckbox;
    this.validateFormInput();
  }

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;

    if (ngForm.submitted && this.isValid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {},
          error: (error) => {
            console.error(error);
          },
          complete: () => {},
        });
    } else if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.mailTest &&
      this.isCheckbox
    ) {
      this.formSubmitted = false;
    }

    if (this.formSubmitted && this.isValid) {
      setTimeout(() => {
        ngForm.resetForm();
        this.formSubmitted = false;
        this.isValid = false;
        this.isCheckbox = false;
      }, 3000);
    }
  }
}
