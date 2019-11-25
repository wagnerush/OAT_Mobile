import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

	formData = {
    id: '',
		Montadora: '',
		Modelo: '',
    Ano_Modelo: '',
    Valor: '',
    Nome_Vendedor: '',
    Telefone: ''
	}

  constructor(private apiService: ApiService, private alertController: AlertController, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation().extras.state);
      if (this.router.getCurrentNavigation().extras.state) {
        this.formData.id = this.router.getCurrentNavigation().extras.state.formDataParams.id;
        this.formData.Montadora = this.router.getCurrentNavigation().extras.state.formDataParams.Montadora;
        this.formData.Modelo = this.router.getCurrentNavigation().extras.state.formDataParams.Modelo;
        this.formData.Ano_Modelo = this.router.getCurrentNavigation().extras.state.formDataParams.Ano_Modelo;
        this.formData.Valor = this.router.getCurrentNavigation().extras.state.formDataParams.Valor;
        this.formData.Nome_Vendedor = this.router.getCurrentNavigation().extras.state.formDataParams.Nome_Vendedor;
        this.formData.Telefone = this.router.getCurrentNavigation().extras.state.formDataParams.Telefone;
      }
    });

  }

  ngOnInit() {
  }

  async formSubmit(){

    if(this.formData.id){ //Atualizar

      await this.apiService.sendPutRequest(this.formData.id, this.formData).subscribe((data)=>{
        console.log(data);
      }, error => {
        console.log(error);
      });

    }
    else{ //Criar

      await this.apiService.sendPostRequest(this.formData).subscribe((data)=>{
      	console.log(data);
      }, error => {
    		console.log(error);
    	});

    }

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Formulário API',
      message: 'Dados enviados com sucesso.',
      buttons: ['OK']
    });

    await alert.present();

  }

}
