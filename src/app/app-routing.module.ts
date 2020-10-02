import { VariableComponent } from './components/variable/variable.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const routes:Routes=[
    {path:'accueil',component:VariableComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
export const routingComponents=[VariableComponent];