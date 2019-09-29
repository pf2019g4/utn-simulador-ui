import '../polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EstadoComponent } from './estado/estado.component';
import { PremiosComponent } from './premios/premios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/components/register.component';
import { DecisionesComponent } from './decisiones/decisiones.component';
import { DecisionDetalleComponent } from './decision-detalle/decision-detalle.component';
import { FlujoFondosComponent } from './flujo-fondos/flujo-fondos.component';
import { ProyectoService } from './proyecto.service';
import { UsuarioService } from './usuario.service';
import { TomaDecisionesComponent } from './toma-decisiones/toma-decisiones.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EscenariosComponent } from './escenarios/escenarios.component';
import { EscenarioDetalleComponent } from './escenario-detalle/escenario-detalle.component';
import { ChartsModule } from 'ng2-charts';
import { EscenariosService } from './escenarios.service';
import { DecisionesService } from './decisiones.service';
import { OpcionDialogComponent } from './decision-detalle/opciones/opcion-dialog.component';
import { ConsecuenciaDialogComponent } from './decision-detalle/consecuencias/consecuencia-dialog.component';
import { MessagesService } from './messages.service';
import { SimulacionesComponent } from './simulaciones/simulaciones.component';
import { PresupuestoFinancieroComponent } from './presupuesto-financiero/presupuesto-financiero.component';
import { PresupuestoEconomicoComponent } from './presupuesto-economico/presupuesto-economico.component';
import { BalanceFinalComponent } from './balance-final/balance-final.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedoresService } from './proveedores.service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatTabGroup
} from '@angular/material';



@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  imports: [AppRoutingModule]
})
export class MaterialModule { }


@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent,
    PremiosComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DecisionesComponent,
    DecisionDetalleComponent,
    FlujoFondosComponent,
    TomaDecisionesComponent,
    ResultadosComponent,
    EscenariosComponent,
    EscenarioDetalleComponent,
    OpcionDialogComponent,
    ConsecuenciaDialogComponent,
    SimulacionesComponent,
    PresupuestoFinancieroComponent,
    PresupuestoEconomicoComponent,
    BalanceFinalComponent,
    ProveedoresComponent, 
    ProveedorDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [
    ProyectoService,
    EscenariosService,
    UsuarioService,
    DecisionesService,
    MessagesService,
    ProveedoresService
  ],
  entryComponents: [RegisterComponent, OpcionDialogComponent, ConsecuenciaDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);