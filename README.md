 Módulos ayudan a organizar la app y componentes representan las pantallas

ng generate module core                   # Para servicios y configuraciones globales
ng generate module shared                # Para componentes reutilizables (botones, modales, etc.)
ng generate module usuarios           # Para la gestión de usuarios

componentes principales:

ng generate component usuarios/lista-usuarios   # Lista de usuarios
ng generate component usuarios/form-usuario     # Formulario de usuario
ng generate component home                      # Página de inicio

Para conectar con el back  creamos servicios que se usan par a ha cer llamadas HTTP a spring boot, nosotros usaremos Swagger pero tambien pongo esto por si nos vale y probamos, con el comando creamos el service              # ng generate service services/usuario

Módulos creados: core, shared, usuarios
Componentes creados: lista-usuarios, form-usuario, home
Servicio Angular (usuario.service.ts) para conectar con el backend.
Rutas (app-routing.module.ts) para navegar entre pantallas.
app.module.ts configurado con HTTP Client.

Agregado el router-outlet a  app.component.html
