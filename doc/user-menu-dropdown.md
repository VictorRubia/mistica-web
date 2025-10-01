# Menú desplegable de usuario en NavigationBar

Este documento explica cómo implementar un menú desplegable de usuario en el `NavigationBar` de Mistica y cómo diseñar una página de Administración de Usuarios.

## Componente Menu para el desplegable de usuario

Para crear un menú desplegable que se abra al pulsar sobre el nombre del usuario en el lado derecho del navbar, debes utilizar el componente `Menu` de Mistica. Este componente permite crear menús contextuales con opciones personalizables.

### Componentes necesarios

- `Menu`: Componente contenedor del menú desplegable
- `MenuItem`: Cada opción dentro del menú
- `MenuSection`: Agrupa opciones del menú (opcional)
- `NavigationBarActionGroup`: Contenedor para las acciones en el lado derecho del navbar
- `NavigationBarAction`: Acción individual en el navbar (para el avatar/nombre de usuario)

## Ejemplo de implementación

### 1. Menú desplegable de usuario en el NavigationBar

```tsx
import * as React from 'react';
import {
    MainNavigationBar,
    NavigationBarActionGroup,
    NavigationBarAction,
    Menu,
    MenuItem,
    MenuSection,
    Avatar,
    Inline,
    Text3,
    IconUserAccountRegular,
    IconSettingsRegular,
    IconLogoutRegular,
} from '@telefonica/mistica';
import { useNavigate } from 'react-router-dom'; // o tu librería de routing

const NavbarWithUserMenu = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = React.useState(0);

    return (
        <MainNavigationBar
            sections={[
                {
                    title: "Inicio",
                    onPress: () => setSelectedSection(0),
                },
                {
                    title: "Mi cuenta",
                    onPress: () => setSelectedSection(1),
                },
                {
                    title: "Explorar",
                    onPress: () => setSelectedSection(2),
                },
            ]}
            selectedIndex={selectedSection}
            right={
                <NavigationBarActionGroup>
                    {/* Menú desplegable de usuario */}
                    <Menu
                        position="right"
                        width={280}
                        renderTarget={({ref, onPress, isMenuOpen}) => (
                            <NavigationBarAction
                                ref={ref}
                                onPress={onPress}
                                aria-label="Menú de usuario"
                            >
                                <Inline space={8} alignItems="center">
                                    <Avatar
                                        size={32}
                                        initials="ML"
                                        src="https://example.com/avatar.jpg"
                                    />
                                    <Text3 regular>María López</Text3>
                                </Inline>
                            </NavigationBarAction>
                        )}
                        renderMenu={({ref, className, close}) => (
                            <div ref={ref} className={className}>
                                <MenuSection>
                                    <MenuItem
                                        label="Mi perfil"
                                        Icon={IconUserAccountRegular}
                                        onPress={() => {
                                            navigate('/perfil');
                                            close();
                                        }}
                                    />
                                    <MenuItem
                                        label="Administración de usuarios"
                                        Icon={IconSettingsRegular}
                                        onPress={() => {
                                            navigate('/admin/usuarios');
                                            close();
                                        }}
                                    />
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem
                                        label="Cerrar sesión"
                                        Icon={IconLogoutRegular}
                                        destructive
                                        onPress={() => {
                                            // Lógica de cierre de sesión
                                            console.log('Cerrar sesión');
                                            close();
                                        }}
                                    />
                                </MenuSection>
                            </div>
                        )}
                    />
                </NavigationBarActionGroup>
            }
        />
    );
};

export default NavbarWithUserMenu;
```

### 2. Página de Administración de Usuarios

Para diseñar la página de Administración de Usuarios, puedes utilizar los componentes de layout y tablas de Mistica:

```tsx
import * as React from 'react';
import {
    ResponsiveLayout,
    Box,
    Stack,
    Title1,
    Title3,
    Text2,
    ButtonPrimary,
    ButtonSecondary,
    Table,
    Avatar,
    Inline,
    IconButton,
    IconEditRegular,
    IconDeleteRegular,
    MainSectionHeaderLayout,
    MainSectionHeader,
    useDialog,
} from '@telefonica/mistica';

const UserAdministrationPage = () => {
    const {alert, confirm} = useDialog();
    const [users, setUsers] = React.useState([
        {
            id: 1,
            name: 'María López Serrano',
            email: 'maria.lopez@example.com',
            role: 'Administrador',
            avatar: 'https://example.com/avatar1.jpg',
        },
        {
            id: 2,
            name: 'Juan García Pérez',
            email: 'juan.garcia@example.com',
            role: 'Usuario',
            avatar: 'https://example.com/avatar2.jpg',
        },
        {
            id: 3,
            name: 'Ana Martínez Ruiz',
            email: 'ana.martinez@example.com',
            role: 'Usuario',
            avatar: 'https://example.com/avatar3.jpg',
        },
    ]);

    const handleEditUser = (userId: number) => {
        alert({
            title: 'Editar usuario',
            message: `Funcionalidad para editar usuario ${userId}`,
        });
    };

    const handleDeleteUser = async (userId: number) => {
        const confirmed = await confirm({
            title: 'Eliminar usuario',
            message: '¿Estás seguro de que deseas eliminar este usuario?',
            acceptText: 'Eliminar',
            cancelText: 'Cancelar',
        });

        if (confirmed) {
            setUsers(users.filter(user => user.id !== userId));
        }
    };

    const handleAddUser = () => {
        alert({
            title: 'Añadir usuario',
            message: 'Funcionalidad para añadir un nuevo usuario',
        });
    };

    return (
        <>
            <MainSectionHeaderLayout>
                <MainSectionHeader
                    title="Administración de usuarios"
                    description="Gestiona los usuarios de tu organización"
                    button={
                        <ButtonPrimary onPress={handleAddUser}>
                            Añadir usuario
                        </ButtonPrimary>
                    }
                />
            </MainSectionHeaderLayout>
            
            <ResponsiveLayout>
                <Box paddingY={24}>
                    <Stack space={24}>
                        <Table
                            responsive
                            heading={['Usuario', 'Email', 'Rol', 'Acciones']}
                            content={users.map(user => [
                                // Columna Usuario con Avatar
                                <Inline space={12} alignItems="center">
                                    <Avatar
                                        size={40}
                                        initials={user.name.split(' ').map(n => n[0]).join('')}
                                        src={user.avatar}
                                    />
                                    <Text2 regular>{user.name}</Text2>
                                </Inline>,
                                // Columna Email
                                <Text2 regular>{user.email}</Text2>,
                                // Columna Rol
                                <Text2 regular>{user.role}</Text2>,
                                // Columna Acciones
                                <Inline space={8}>
                                    <IconButton
                                        Icon={IconEditRegular}
                                        aria-label="Editar usuario"
                                        onPress={() => handleEditUser(user.id)}
                                    />
                                    <IconButton
                                        Icon={IconDeleteRegular}
                                        aria-label="Eliminar usuario"
                                        onPress={() => handleDeleteUser(user.id)}
                                    />
                                </Inline>,
                            ])}
                        />
                    </Stack>
                </Box>
            </ResponsiveLayout>
        </>
    );
};

export default UserAdministrationPage;
```

## Alternativas y personalizaciones

### Variante con RowList para móvil

Si prefieres una vista más adaptada a móvil, puedes usar `RowList` y `Row`:

```tsx
import {
    RowList,
    Row,
    useScreenSize,
} from '@telefonica/mistica';

const UserAdministrationMobileFriendly = () => {
    const {isDesktopOrBigger} = useScreenSize();
    const users = [...]; // tu lista de usuarios

    return (
        <ResponsiveLayout>
            <Box paddingY={24}>
                <Stack space={16}>
                    <Title1>Administración de usuarios</Title1>
                    
                    {isDesktopOrBigger ? (
                        // Vista de tabla para desktop
                        <Table {...tableProps} />
                    ) : (
                        // Vista de lista para móvil
                        <RowList>
                            {users.map(user => (
                                <Row
                                    key={user.id}
                                    title={user.name}
                                    subtitle={user.email}
                                    description={user.role}
                                    asset={
                                        <Avatar
                                            size={40}
                                            initials={user.name.split(' ').map(n => n[0]).join('')}
                                            src={user.avatar}
                                        />
                                    }
                                    onPress={() => handleEditUser(user.id)}
                                />
                            ))}
                        </RowList>
                    )}
                </Stack>
            </Box>
        </ResponsiveLayout>
    );
};
```

### Añadir búsqueda y filtros

```tsx
import {
    SearchField,
    Select,
} from '@telefonica/mistica';

const UserAdministrationWithFilters = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [roleFilter, setRoleFilter] = React.useState('all');

    return (
        <ResponsiveLayout>
            <Box paddingY={24}>
                <Stack space={24}>
                    <Inline space={16}>
                        <SearchField
                            name="search"
                            value={searchQuery}
                            onChangeValue={setSearchQuery}
                            placeholder="Buscar usuarios..."
                        />
                        <Select
                            name="role"
                            value={roleFilter}
                            onChangeValue={setRoleFilter}
                            options={[
                                {value: 'all', text: 'Todos los roles'},
                                {value: 'admin', text: 'Administrador'},
                                {value: 'user', text: 'Usuario'},
                            ]}
                        />
                    </Inline>
                    
                    {/* Tabla o lista de usuarios */}
                </Stack>
            </Box>
        </ResponsiveLayout>
    );
};
```

## Consideraciones de accesibilidad

- Utiliza `aria-label` en los botones del menú para describir su función
- Asegúrate de que todos los elementos interactivos sean accesibles por teclado
- El componente `Menu` de Mistica ya incluye navegación por teclado (flechas, Enter, Escape)
- Usa `IconButton` con `aria-label` descriptivos para las acciones de la tabla

## Navegación

Para la navegación entre páginas, configura el componente `Link` en tu `ThemeContextProvider`:

```tsx
import {ThemeContextProvider, getMovistarSkin} from '@telefonica/mistica';
import {Link} from 'react-router-dom'; // o Next.js Link

const theme = {
    skin: getMovistarSkin(),
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    Link: {type: 'ReactRouter6', Component: Link}, // o 'Next14', etc.
};

<ThemeContextProvider theme={theme}>
    <App />
</ThemeContextProvider>
```

## Recursos adicionales

- Documentación de Menu: Ver Storybook de Mistica > Components > Menu
- Documentación de NavigationBar: Ver Storybook de Mistica > Components > Navigation bars
- Ejemplos completos: `/examples/cra-with-react-router` y `/examples/next` en el repositorio
