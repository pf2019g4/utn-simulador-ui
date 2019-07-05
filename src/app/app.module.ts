import '../polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule }    from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SimulationsComponent } from './simulations/simulations.component';
import { AwardsComponent } from './awards/awards.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './login/components/register.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { DecisionDetailComponent } from './decision-detail/decision-detail.component';

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
} from '@angular/material';
import { ProyectService } from './proyect.service';



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
    MatTooltipModule,
  ],
  imports: [AppRoutingModule]
})
export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    SimulationsComponent,
    AwardsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DecisionsComponent,
    DecisionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ProyectService
  ],
  entryComponents: [RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);