import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  body:any={
    to_name:'',
    message:'',
    from_Name:'',
    url_app: '',
    email_To: '',
    }
  constructor() { }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_3mcwlc8', 
    'template_z0gt914',
    'DPymQjxnPiX6l_e46',
      this.body
    )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


   
}
