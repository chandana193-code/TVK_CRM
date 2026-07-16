import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

    constructor(
    private service: StudentService,
    private router: Router
  ) {}

  completePayment(transactionId: string) {

    if (!transactionId) {
      alert("Please enter Transaction ID");
      return;
    }

    const student = JSON.parse(
      localStorage.getItem('studentData') || '{}'
    );

    this.service.addStudent(student).subscribe(() => {

      alert("Registration Successful");

      localStorage.removeItem('studentData');

      this.router.navigate(['/']);

    });

  }

}
