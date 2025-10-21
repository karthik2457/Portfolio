import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface emailFormData {
  fullName :string,
  email :string,
  emailSubject :string,
  emailContent :string
}

@Component({
  selector: 'app-std-cont-info',
  templateUrl: './std-cont-info.component.html',
  styleUrls: ['./std-cont-info.component.scss']
})
export class StdContInfoComponent {
  sendEmailFromGroup: FormGroup = new FormGroup({})
  constructor(
    private fb : FormBuilder,
    //private sd : EmailJS,
    //private emailjs: EmailJS,
    
  ) {
    this.sendEmailFromGroup = this.fb.group({
      fullName : ['', Validators.required],
      email : ['', Validators.required],
      emailSubject : ['', Validators.required],
      emailContent : ['', Validators.required],
    })
    this.send()
  }
//   sendEmail() {
//     const emailFormData = {
//       fullName :"karthik",
//       email :"deepas.r522@gmail.com",
//       emailSubject :"Testing email",
//       emailContent :"Hello deepas Babu",
//     }
//     emailjs
//       .sendForm('service_7dylkgb', 'template_jxcrz0o', emailFormData as HTMLFormElement, {
//         publicKey: '9UGWa5Slf9SpuUq99',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', (error as EmailJSResponseStatus).text);
//         },
//       );
//   }

  // send() {
  //   //const emailFormData = this.sendEmailFromGroup.value;
  //   const emailFormData = {
  //     fullName :"karthik",
  //     email :"deepas.r522@gmail.com",
  //     emailSubject :"Testing email",
  //     emailContent :"Hello deepas Babu",
  //   }
  //   // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, {
  //   //     publicKey: 'YOUR_PUBLIC_KEY',
  //   //   })
  //   // emailjs.send("service_7dylkgb","template_jxcrz0o",{
  //   //   from_name: emailFormData['fullName'],
  //   //   to_name: "karthik",
  //   //   from_email: emailFormData['email'],
  //   //   subject: emailFormData['emailSubject'],
  //   //   message: emailFormData['emailContent'],
  //   //   })
  //   // emailjs
  //   //   .sendForm('service_7dylkgb', 'template_jxcrz0o', e.target as HTMLFormElement, {
  //   //     publicKey: 'YOUR_PUBLIC_KEY',
  //   //   }).then(
  //   //     () => {
  //   //       console.log('SUCCESS!');
  //   //     },
  //   //     (error) => {
  //   //       console.log('FAILED...', (error as EmailJSResponseStatus).text);
  //   //     },
  //   //   );
  // }
  
  send() {
    const emailFormData = {
      fullName: "karthik",
      email: "deepas.r522@gmail.com",
      emailSubject: "Testing email",
      emailContent: "Hello deepas Babu",
    };
  
    emailjs.send('service_7dylkgb', 'template_jxcrz0o', {
      
      from_name: emailFormData.fullName,
      to_name: "karthik",
      from_email: emailFormData.email,
      subject: emailFormData.emailSubject,
      message: emailFormData.emailContent,
    }).then(
      (response) => {
        console.log('Email successfully sent!', response);
      },
      (error) => {
        console.error('Email sending failed:', error);
      }
    );
  }
  
 }
