import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { RazorPaymentComponent } from './razor-payment/razor-payment.component';

const routes: Routes = [
  {
     path:'language',component:LanguageComponent
  },
  {
    path:'razor-Payment',component:RazorPaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
