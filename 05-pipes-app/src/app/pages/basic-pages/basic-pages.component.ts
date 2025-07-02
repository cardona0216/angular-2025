import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { SectionComponent } from "../../shared/section/section.component";

@Component({
  selector: 'app-basic-pages',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, SectionComponent],
  templateUrl: './basic-pages.component.html'
})
export default class BasicPagesComponent {

  //losnpieps son para tranformar la data pero no para modificarla
  //soloe s para combiara su aparciencia pero la data no muta transformacion visual de alguna data

  nombreMinusculaLowercase = signal('walter-minusculas')
  ejemplomayusculas = signal(`El pipe uppercase en Angular se utiliza para convertir todo el texto en **mayúsculas**. Es útil cuando quieres mostrar contenido en un formato más destacado o uniforme. Se aplica usando el símbolo | seguido de uppercase en el template.`)
  
  nombreMayusculaUppercase = signal('WALTER-MAYUSCULA')
  ejemplominusculas = signal(`EL PIPE LOWERCASE EN ANGULAR SE UTILIZA PARA CONVERTIR TODO EL TEXTO EN MINÚSCULAS. ES ÚTIL CUANDO DESEAS ESTANDARIZAR EL TEXTO O MOSTRARLO EN UN ESTILO MÁS SIMPLE. SE APLICA USANDO EL SÍMBOLO | SEGUIDO DE LOWERCASE EN EL TEMPLATE.`)
  
  nombrefullName = signal('wALteR cArdOnA')
  
  fullName = signal(`eL PiPe tITleCAseEn aNguLar cONvIerTe lA PrIMeRa LeTra De cAdA pAlAbrA a MaYúScULa.
      eS úTiL PaRa nOMbRes, TíTuLoS U oRaCiOnEs dOnDe sE ReQuIeRe fOrMaTo cApItAlIzAdO.
      sE aPLiCa uSaNdO eL SíMbOLo | SeGuIdO dE tITleCAse`)

  


 }
