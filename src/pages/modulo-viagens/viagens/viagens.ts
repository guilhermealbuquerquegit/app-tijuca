import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD

import { GeralPage } from '../geral/geral-page/geral-page';
import { DespesasPage } from '../despesas/despesas/despesas';
import { RotasPage } from '../rotas/rotas';
import { RotasArlaPage } from '../arla-32/rotas-arla/rotas-arla';
import { RotasReceitasPage } from '../receitas/rotas-receitas/rotas-receitas';
=======
import { GeralPage } from '../geral/geral-page/geral-page'; 
import { DespesasPage } from '../despesas/despesas/despesas'; 
import { RotasArlaPage } from '../arla-32/rotas-arla/rotas-arla'; 
import { ReceitasFornecedorPage } from '../receitas/receita-fornecedor/receita-fornecedor';
import { RotasAbastecimentoPage } from '../abastecimento/rotas-abastecimento/rotas-abastecimento';
>>>>>>> f1d60d856806af44ad000df921d2400eea027106

@IonicPage()
@Component({
  selector: 'page-viagens',
  templateUrl: 'viagens.html',
})
export class ViagensPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViagensPage');
  }

  linkReceitas(){
    this.navCtrl.push(RotasReceitasPage);
  }
  
  linkDespesas(){
      this.navCtrl.push(DespesasPage);
  }

  linkArla32(){
    this.navCtrl.push(RotasArlaPage);
  }

  linkGeral(){
    this.navCtrl.push(GeralPage);
  }

  linkAbastecimento(){
    this.navCtrl.push(RotasAbastecimentoPage);
  }

}
