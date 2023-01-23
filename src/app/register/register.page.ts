import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_message = {
    name: [
      { type: "required", message: "El NOMBRE es Obligatorio" },
      { type: "pattern", message: "Tu NOMBRE no es valido" }
    ],
    last_name: [
      { type: "required", message: "EL APELLIDO es Obligatorio"},
      { type: "minLength", message: "Tu APELLIDO no es valido" }
    ],
    document_type: [
      { type: "required", message: "El TIPO DE DOCUMENTO es Obligatorio"},
      { type: "minLength", message: "Contraseña mayor a 5 dígitos" }
    ]
    ,document_number: [
      { type: "required", message: "El DOCUMENTO DE IDENTIDAD es Obligatorio" },
      { type: "pattern", message: "Tu DOCUMENTO DE IDENTIDAD no es valido" }
    ],
    career: [
      { type: "required", message: "La CARRERA es Obligatorio"},
      { type: "minLength", message: "Contraseña mayor a 5 dígitos" }
    ]
    ,email: [
      { type: "required", message: "El Email es Obligatorio" },
      { type: "pattern", message: "Tu email no es valido" }
    ],
    password: [
      { type: "required", message: "La Contraseña es Obligatorio"},
      { type: "minLength", message: "Contraseña mayor a 5 dígitos" }
    ]
  }
  errorMenssage: any;

  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService
    ) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z].*")
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]")
        ])
      ),
      document_type: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      document_number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]")
        ])
      ),
      career: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ),
    });
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    });
  }

}