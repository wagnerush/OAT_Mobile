import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  // Data passed in by componentProps
  @Input() Montadora: string;
  @Input() Modelo: string;
  @Input() Ano_Modelo: string;
  @Input() Valor: string;
  @Input() Nome_Vendedor: string;
  @Input() Telefone: string;
  @Input() modalController: ModalController;

  constructor() { }

  ngOnInit() {
  }

	dismissModal() {
		this.modalController.dismiss({
		  'dismissed': true
		});
	}

}
