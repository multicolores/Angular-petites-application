import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './componentsTodo/header/header.component';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { ButtonComponent } from './componentsTodo/button/button.component';
import { TasksComponent } from './componentsTodo/tasks/tasks.component';
import { TaskItemComponent } from './componentsTodo/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TaskDialogComponent } from './componentsTodo/task-dialog/task-dialog.component';
import { HeroesComponent } from './project-container/heroes/heroes.component';
import { MessagesComponent } from './project-container/messages/messages.component';
import { HeroDetailComponent } from './project-container/hero-detail/hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './API/films/films.component';
import { FilmDetailComponent } from './API/film-detail/film-detail.component';
import { FilmSearchComponent } from './API/film-search/film-search.component';

const firebaseConfig = {
  apiKey: "AIzaSyDb5GSZYtSasyn-sJUTn62jwh6zGkAMGZI",
  authDomain: "todoapp-c82f0.firebaseapp.com",
  projectId: "todoapp-c82f0",
  storageBucket: "todoapp-c82f0.appspot.com",
  messagingSenderId: "114067425341",
  appId: "1:114067425341:web:161db4ee8ebe343b4a4254",
  measurementId: "G-E9QL69WXFG"
};

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    HeaderComponent,
    ProjectContainerComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    TaskDialogComponent,
    HeroesComponent,
    MessagesComponent,
    HeroDetailComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // TaskDialogComponent,
    // TaskDialogResult,

    MatInputModule,
    FormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
