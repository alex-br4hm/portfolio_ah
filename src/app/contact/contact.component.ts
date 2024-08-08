import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

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
    endPoint: 'https://deineDomain.de/sendMail.php',
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
    // this.validateFormInput();
    this.formSubmitted = true;

    if (this.formSubmitted && this.isValid) {
      alert('sended');
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.formSubmitted = false;
      ngForm.resetForm();
    }
  }
}
