import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  // userId: string | null = null;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     // this.userId = params['id'];
  //     console.log(params);
  //   });
  // }

  student: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    //// check the id and , if matches then get the student
    this.student = this.studentService.students.find((s) => s.id === id);

    console.log(this.student);
  }
}
