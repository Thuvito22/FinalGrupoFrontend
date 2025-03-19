import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
                                 // Aquí irán las rutas, imagino que los components como lista usuarios, form-usuario,etc.
                                  // { path: 'home', mcomponent: HoeComponent } esta para que vacia y vuelve sola a la raiz.
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }


//app-routing.module.ts para las rutas, lo cual es una buena práctica


/// Puntos a Mejorar y Aclaraciones:

///*app.routes.ts vs. app-routing.module.ts:

///*app.routes.ts (En tu caso): Este archivo está prácticamente vacío (export const routes: Routes = [];). En un proyecto con app.config.ts, este archivo no es necesario si ya estás definiendo las rutas en app-routing.module.ts. En proyectos con app.module.ts si se usa.
//app-routing.module.ts: Este es el archivo donde deberías definir todas tus rutas. Es el módulo de enrutamiento de tu aplicación.
//Conclusión: En tu caso, puedes eliminar app.routes.ts y dejar solo app-routing.module.ts para definir las rutas. En app.config.ts se usa provideRouter y se le pasa el array de rutas que esta en app-routing.module.ts.
//Diferencia: En proyectos con app.module.ts se usa RouterModule.forRoot(routes) para configurar las rutas, y en proyectos con app.config.ts se usa provideRouter(routes)./*