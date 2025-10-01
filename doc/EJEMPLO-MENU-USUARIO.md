# Guía rápida: Menú de usuario en NavigationBar

Esta guía responde a la pregunta: **¿Cómo crear un menú desplegable de usuario en el NavigationBar con una opción "Administración de usuarios"?**

## Respuesta rápida

Usa el componente **`Menu`** de Mistica dentro de un **`NavigationBarAction`**:

```tsx
import {
    MainNavigationBar,
    NavigationBarActionGroup,
    NavigationBarAction,
    Menu,
    MenuItem,
    MenuSection,
    Avatar,
} from '@telefonica/mistica';

<MainNavigationBar
    right={
        <NavigationBarActionGroup>
            <Menu
                position="right"
                renderTarget={({ref, onPress}) => (
                    <NavigationBarAction ref={ref} onPress={onPress}>
                        <Avatar initials="ML" />
                    </NavigationBarAction>
                )}
                renderMenu={({ref, className}) => (
                    <div ref={ref} className={className}>
                        <MenuItem 
                            label="Administración de usuarios"
                            onPress={() => navigate('/admin/users')}
                        />
                    </div>
                )}
            />
        </NavigationBarActionGroup>
    }
/>
```

## Recursos disponibles

### 📖 Documentación completa
Ver [`doc/user-menu-dropdown.md`](./user-menu-dropdown.md) para:
- Código completo listo para usar
- Diseño de la página de Administración de Usuarios
- Variantes responsive (mobile/desktop)
- Personalización con búsqueda y filtros
- Consideraciones de accesibilidad

### 💻 Ejemplos funcionales

1. **NavigationBar con menú de usuario**
   - Archivo: `examples/next/pages/navbar-with-user-menu.tsx`
   - Muestra: NavigationBar completo con menú desplegable integrado

2. **Página de Administración de Usuarios**
   - Archivo: `examples/next/pages/admin/users.tsx`
   - Muestra: Tabla de usuarios con acciones (editar/eliminar)
   - Incluye: Diálogos de confirmación, manejo de estado

### 🎮 Probar en Playroom

Busca el snippet **"MainNavigationBar with user menu dropdown"** en el Playroom de Mistica para experimentar con el código interactivamente.

## Componentes clave

| Componente | Propósito |
|------------|-----------|
| `Menu` | Contenedor del menú desplegable |
| `MenuItem` | Cada opción del menú |
| `MenuSection` | Agrupa opciones relacionadas |
| `NavigationBarAction` | Acción en el navbar que abre el menú |
| `Avatar` | Imagen/iniciales del usuario |

## Estructura recomendada

```
src/
├── components/
│   └── NavbarWithUserMenu.tsx    # NavigationBar con menú
├── pages/
│   └── admin/
│       └── users.tsx              # Página de administración
```

## Pasos siguientes

1. Copia el código de ejemplo de `doc/user-menu-dropdown.md`
2. Adapta la navegación a tu router (React Router o Next.js)
3. Conecta con tu API para datos reales
4. Personaliza el diseño según tus necesidades

## Preguntas frecuentes

### ¿Cómo cierro el menú después de hacer click en una opción?

El menú se cierra automáticamente cuando se hace click en un `MenuItem`. Si necesitas lógica adicional, usa la función `close` proporcionada:

```tsx
renderMenu={({ref, className, close}) => (
    <div ref={ref} className={className}>
        <MenuItem 
            label="Mi opción"
            onPress={() => {
                // Tu lógica aquí
                close(); // Cierra el menú manualmente si es necesario
            }}
        />
    </div>
)}
```

### ¿Cómo hago el menú responsive?

Usa el hook `useScreenSize` para mostrar/ocultar el nombre del usuario:

```tsx
const {isDesktopOrBigger} = useScreenSize();

<Avatar size={isDesktopOrBigger ? 32 : 24} />
{isDesktopOrBigger && <Text3>Nombre Usuario</Text3>}
```

### ¿Qué iconos puedo usar?

Mistica incluye estos iconos relevantes:
- `IconUserAccountRegular`: Perfil de usuario
- `IconSettingsRegular`: Configuración
- `IconLogoutRegular`: Cerrar sesión
- `IconEditRegular`: Editar
- `IconTrashCanRegular`: Eliminar

Ver la documentación de iconos de Mistica para el catálogo completo.

### ¿Cómo navego a otra página?

Configura el componente `Link` en tu `ThemeContextProvider`:

```tsx
import {Link} from 'react-router-dom';

<ThemeContextProvider
    theme={{
        ...otherConfig,
        Link: {type: 'ReactRouter6', Component: Link}
    }}
>
```

Luego, en tu `MenuItem`:

```tsx
const navigate = useNavigate(); // o useRouter() para Next.js

<MenuItem 
    label="Administración"
    onPress={() => navigate('/admin/users')}
/>
```

## Soporte

Para más información sobre los componentes de Mistica:
- Visita el Storybook del proyecto
- Lee la documentación en `/doc`
- Explora los ejemplos en `/examples`
