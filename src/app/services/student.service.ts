import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Student } from '../model/student/student.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

    api="http://localhost:3000/students";

  constructor(private http:HttpClient) { }

  addStudent(data:Student):Observable<Student>{

    return this.http.post<Student>(this.api,data);

  }

  getStudents():Observable<Student[]>{

    return this.http.get<Student[]>(this.api);

  }
}
