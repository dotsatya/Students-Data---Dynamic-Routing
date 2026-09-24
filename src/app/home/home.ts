import { Component } from '@angular/core';
import { Student } from '../student/student';
import { RouterLink } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  imports: [RouterLink, Student],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  // // // use from student.service where student data is stored
  students;

  constructor(private studentService: StudentService) {
    this.students = this.studentService.students;
  }

  //   students = [
  //     {
  //       id: 101,
  //       name: 'Satya Sundar Dey',
  //       rollNo: 'IT202201',
  //       department: 'Information Technology',
  //       year: 4,
  //       email: 'satya@example.com',
  //       phone: '9876543210',

  //       subjects: [
  //         'Data Structures',
  //         'Database Management System',
  //         'Operating Systems',
  //         'Computer Networks',
  //       ],

  //       marks: [86, 91, 78, 88],

  //       sports: ['Badminton', 'Table Tennis'],
  //     },

  //     {
  //       id: 102,
  //       name: 'Rahul Sharma',
  //       rollNo: 'CSE202202',
  //       department: 'Computer Science',
  //       year: 4,
  //       email: 'rahul@example.com',
  //       phone: '9876543211',

  //       subjects: ['Data Structures', 'Machine Learning', 'Computer Networks', 'Web Technology'],

  //       marks: [82, 94, 76, 89],

  //       sports: ['Cricket', 'Football'],
  //     },

  //     {
  //       id: 103,
  //       name: 'Priya Das',
  //       rollNo: 'ECE202303',
  //       department: 'Electronics & Communication',
  //       year: 3,
  //       email: 'priya@example.com',
  //       phone: '9876543212',

  //       subjects: [
  //         'Digital Electronics',
  //         'Microprocessors',
  //         'Signals and Systems',
  //         'Communication Systems',
  //       ],

  //       marks: [90, 84, 79, 87],

  //       sports: ['Badminton', 'Basketball'],
  //     },

  //     {
  //       id: 104,
  //       name: 'Amit Roy',
  //       rollNo: 'ME202104',
  //       department: 'Mechanical Engineering',
  //       year: 4,
  //       email: 'amit@example.com',
  //       phone: '9876543213',

  //       subjects: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing Technology'],

  //       marks: [75, 81, 88, 92],

  //       sports: ['Football', 'Cricket'],
  //     },
  //   ];
}
