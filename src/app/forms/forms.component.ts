import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formEstudiante : FormGroup 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formEstudiante=this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(10)]], 
      apellido:['',[Validators.required]],
      edad:['',[Validators.required]],
      fecha:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]]
    })
}
  submit(){
    console.log(this.formEstudiante.value);
  }

}
