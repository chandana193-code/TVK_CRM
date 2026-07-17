import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {


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

    middleName: [''],

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
    ]],

    collegeRegId: ['', Validators.required],

    course: ['', Validators.required],

    photo: [null, Validators.required],

    document: [null, Validators.required]

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

  photoError: string = '';

  onPhotoSelected(event: any) {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const maxSize = 1024 * 1024; 

    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];

    if (!allowedTypes.includes(file.type)) {
      this.photoError = 'Only JPG, JPEG and PNG images are allowed.';
      event.target.value = '';
      this.studentForm.patchValue({ photo: null });
      return;
    }

    if (file.size > maxSize) {
      this.photoError = 'Passport size photo must not exceed 1 MB.';
      event.target.value = '';
      this.studentForm.patchValue({ photo: null });
      return;
    }

    this.photoError = '';

    this.studentForm.patchValue({
      photo: file
    });

    this.studentForm.get('photo')?.updateValueAndValidity();
  }

  documentError: string = '';

  onDocumentSelected(event: any) {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const maxSize = 1024 * 1024; 

    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'application/pdf'
    ];

    if (!allowedTypes.includes(file.type)) {
      this.documentError =
        'Only JPG, JPEG, PNG and PDF files are allowed.';
      event.target.value = '';
      this.studentForm.patchValue({ document: null });
      return;
    }

    if (file.size > maxSize) {
      this.documentError =
        'Aadhaar/PAN file size must not exceed 1 MB.';
      event.target.value = '';
      this.studentForm.patchValue({ document: null });
      return;
    }

    this.documentError = '';

    this.studentForm.patchValue({
      document: file
    });

    this.studentForm.get('document')?.updateValueAndValidity();
  }

}