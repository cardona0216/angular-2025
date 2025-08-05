import { Route, Routes } from "@angular/router";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";


export const authRoutes: Routes = [

    //creamos las rutas del auth

  {
    path:'',
    children:[
        {
            path: 'register',
            component: RegisterPageComponent
        },
        {
            path:'**',
            redirectTo:'register'
        }
    ]
  }

]


export default authRoutes;