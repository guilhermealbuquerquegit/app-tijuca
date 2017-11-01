import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home/home';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ViagensPage } from '../pages/viagens/viagens';
import { ReceitasFornecedorPage } from '../pages/receitas/receita-fornecedor/receita-fornecedor';
import { ReceitasQntPage } from '../pages/receitas/receitas-qnt/receitas-qnt';
import { ReceitasFotoPage } from '../pages/receitas/receitas-foto/receitas-foto';
import { DespesasPage } from '../pages/despesas/despesas/despesas';
import { GeralPage } from '../pages/geral/geral'; 
import { AbastecimentoPage } from '../pages/abastecimento/abastecimento';
import { Abastecimento2Page } from '../pages/abastecimento2/abastecimento2';
import { Abastecimento3Page } from '../pages/abastecimento3/abastecimento3';
import { Abastecimento4Page } from '../pages/abastecimento4/abastecimento4';
import { RotasPage } from '../pages/rotas/rotas';
import { Geral2Page } from '../pages/geral2/geral2';
import { Geral3Page } from '../pages/geral3/geral3';
import { ArlapagPage } from '../pages/arla-32/arla-pag/arlapag';
import { ArlapostoPage } from '../pages/arla-32/arla-posto/arlaposto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,
    ReceitasFotoPage,
    DespesasPage, 
    GeralPage,
    AbastecimentoPage,
    Abastecimento2Page,
    Abastecimento3Page,
    Abastecimento4Page,
    RotasPage,
    Geral2Page,
    Geral3Page,
    ArlapagPage,
    ArlapostoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,    
    ReceitasFotoPage,
    DespesasPage,
    GeralPage,
    AbastecimentoPage,
    Abastecimento2Page,
    Abastecimento3Page,
    Abastecimento4Page,
    RotasPage,
    Geral2Page,
    Geral3Page,
    ArlapagPage,
    ArlapostoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}