import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hello-world' },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'transfer-money', component: TransferMoneyComponent },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
  { path: '**', component: FourOfourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
