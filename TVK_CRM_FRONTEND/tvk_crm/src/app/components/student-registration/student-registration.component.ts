import { Component , OnInit} from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit  {

  
  passoutYears: number[] = [];
  constructor(
    private fb: FormBuilder,
    private service: StudentService
  ) {
    const currentYear = new Date().getFullYear();

    for (let year = currentYear; year >= 2015; year--) {
      this.passoutYears.push(year);
    }
  }

  degrees = [
    'B.E',
    'B.Tech',
    'B.Com',
    'B.Sc',
    'B.A',
    'BCA',
    'BBA',
    'MBA',
    'MCA'
  ];

  groupData: any = {
    'B.E': [
      'Computer Science Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electrical & Electronics Engineering',
      'Electronics & Communication Engineering'
    ],

    'B.Tech': [
      'Information Technology',
      'Artificial Intelligence & Data Science',
      'Artificial Intelligence & Machine Learning',
      'Cyber Security'
    ],

    'B.Com': [
      'General',
      'Accounting & Finance',
      'Corporate Secretaryship',
      'Bank Management',
      'Computer Applications'
    ],

    'B.Sc': [
      'Computer Science',
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biotechnology',
      'Microbiology'
    ],

    'B.A': [
      'English',
      'Tamil',
      'History',
      'Economics',
      'Political Science'
    ],

    'BCA': [
      'Computer Applications'
    ],

    'BBA': [
      'Business Administration',
      'Marketing',
      'Finance',
      'Human Resource'
    ],

    'MBA': [
      'Finance',
      'Marketing',
      'HR',
      'Operations',
      'Business Analytics'
    ],

    'MCA': [
      'Computer Applications'
    ]
  };

  groups: string[] = [];

  onDegreeChange(event: any) {

    const degree = event.target.value;

    this.groups = this.groupData[degree] || [];

    this.studentForm.patchValue({
      group: ''
    });

  }

  students: any = [];

  studentForm = this.fb.group({

    firstName: ['', [Validators.required]],

    lastName: ['', [Validators.required]],

    mobile: ['', [
      Validators.required,
      Validators.pattern('^[6-9][0-9]{9}$')
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    college: ['', [Validators.required]],

    degree: ['', [Validators.required]],

    group: ['', [Validators.required]],

    passout: ['', [
      Validators.required,
      Validators.min(2015),
      Validators.max(2027)
    ]],

    aadhaar: ['', [
      Validators.required,
      Validators.pattern('^[0-9]{12}$')
    ]]

  });

  ngOnInit() {

    this.loadStudents();

  }

  get f() {
    return this.studentForm.controls;
  }

  saveStudent() {

    if (this.studentForm.invalid) {

      this.studentForm.markAllAsTouched();

      return;

    }

    this.service.addStudent(this.studentForm.value as any)
      .subscribe(() => {

        alert("Student Registered Successfully");

        this.studentForm.reset();

        this.loadStudents();

      });

  }



  loadStudents() {

    this.service.getStudents().subscribe(res => {

      this.students = res;

    })

  }

}
