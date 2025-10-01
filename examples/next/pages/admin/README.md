# Ejemplo: Administración de Usuarios

Este directorio contiene un ejemplo de página de administración de usuarios implementada con Mistica.

## Archivos

- `users.tsx`: Página principal de administración de usuarios con tabla

## Cómo usar

1. Navega a esta página desde el menú de usuario en el navbar
2. La página muestra una tabla con los usuarios del sistema
3. Puedes editar o eliminar usuarios usando los botones de acción
4. El botón "Añadir usuario" abre un diálogo (mock)

## Componentes Mistica utilizados

- `MainSectionHeader` y `MainSectionHeaderLayout`: Header de la sección con título, descripción y botón de acción
- `ResponsiveLayout`: Layout responsive que se adapta a diferentes tamaños de pantalla
- `Table`: Componente de tabla para mostrar los datos
- `Avatar`: Avatar del usuario
- `useDialog`: Hook para mostrar diálogos de confirmación y alertas
- `ButtonPrimary` y `ButtonSecondary`: Botones de acción

## Navegación

Para acceder a esta página desde otras partes de la aplicación, usa:

```tsx
// Con Next.js
router.push('/admin/users');

// Con React Router
navigate('/admin/users');
```

## Personalización

Puedes personalizar esta página para:

- Integrar con tu API backend para cargar y guardar datos reales
- Añadir paginación si tienes muchos usuarios
- Añadir búsqueda y filtros
- Implementar un formulario de edición/creación de usuarios
- Usar RowList para una vista más adaptada a móvil
