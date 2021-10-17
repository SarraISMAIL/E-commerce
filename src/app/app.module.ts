import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { BlocArticlesComponent } from './bloc-articles/bloc-articles.component';
import { BlocSocialComponent } from './bloc-social/bloc-social.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailPipe } from './email.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ArticleComponent,
    BlocArticlesComponent,
    BlocSocialComponent,
    EmailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
