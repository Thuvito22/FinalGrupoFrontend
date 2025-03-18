
// faltan los imports

const routes: Routes = [
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'formulario', component: FormularioUsuarioComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' } // Redirección inicial
];
