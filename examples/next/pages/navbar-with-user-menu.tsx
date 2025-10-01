import * as React from 'react';
import {useRouter} from 'next/router';
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
    ResponsiveLayout,
    Box,
    Stack,
    Title1,
    Text2,
    useScreenSize,
} from '@telefonica/mistica';

// Mock icons - replace with actual Mistica icons if needed
const IconUser = () => <span>👤</span>;
const IconSettings = () => <span>⚙️</span>;
const IconLogout = () => <span>🚪</span>;

const NavbarWithUserMenuExample = (): JSX.Element => {
    const router = useRouter();
    const {isDesktopOrBigger} = useScreenSize();
    const [selectedSection, setSelectedSection] = React.useState(0);

    return (
        <>
            <MainNavigationBar
                sections={[
                    {
                        title: 'Inicio',
                        onPress: () => setSelectedSection(0),
                    },
                    {
                        title: 'Mi cuenta',
                        onPress: () => setSelectedSection(1),
                    },
                    {
                        title: 'Explorar',
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
                                        <Avatar size={isDesktopOrBigger ? 32 : 24} initials="ML" />
                                        {isDesktopOrBigger && <Text3 regular>María López</Text3>}
                                    </Inline>
                                </NavigationBarAction>
                            )}
                            renderMenu={({ref, className, close}) => (
                                <div ref={ref} className={className}>
                                    <MenuSection>
                                        <MenuItem
                                            label="Mi perfil"
                                            Icon={IconUser}
                                            onPress={() => {
                                                router.push('/user/maria-lopez');
                                            }}
                                        />
                                        <MenuItem
                                            label="Administración de usuarios"
                                            Icon={IconSettings}
                                            onPress={() => {
                                                router.push('/admin/users');
                                            }}
                                        />
                                    </MenuSection>
                                    <MenuSection>
                                        <MenuItem
                                            label="Cerrar sesión"
                                            Icon={IconLogout}
                                            destructive
                                            onPress={() => {
                                                console.log('Cerrar sesión');
                                                alert('Sesión cerrada');
                                            }}
                                        />
                                    </MenuSection>
                                </div>
                            )}
                        />
                    </NavigationBarActionGroup>
                }
            />

            <ResponsiveLayout>
                <Box paddingY={32}>
                    <Stack space={24}>
                        <Title1>Ejemplo: NavigationBar con menú de usuario</Title1>
                        <Stack space={16}>
                            <Text2 regular>
                                Este ejemplo demuestra cómo implementar un menú desplegable de usuario en
                                el NavigationBar utilizando el componente <strong>Menu</strong> de Mistica.
                            </Text2>
                            <Text2 regular>
                                <strong>Funcionalidades incluidas:</strong>
                            </Text2>
                            <ul>
                                <li>
                                    <Text2 regular>
                                        Click en el avatar/nombre del usuario para abrir el menú
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        Opción "Mi perfil" que navega a la página de perfil
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        Opción "Administración de usuarios" que navega a{' '}
                                        <code>/admin/users</code>
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        Opción "Cerrar sesión" con estilo destructivo (color rojo)
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        Navegación por teclado (flechas arriba/abajo, Enter, Escape)
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        Responsive: el nombre del usuario solo se muestra en desktop
                                    </Text2>
                                </li>
                            </ul>
                            <Text2 regular>
                                <strong>Componentes utilizados:</strong>
                            </Text2>
                            <ul>
                                <li>
                                    <Text2 regular>
                                        <code>Menu</code>: Contenedor principal del menú desplegable
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        <code>MenuItem</code>: Cada opción dentro del menú
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        <code>MenuSection</code>: Agrupa opciones relacionadas
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        <code>NavigationBarAction</code>: Acción que abre el menú
                                    </Text2>
                                </li>
                                <li>
                                    <Text2 regular>
                                        <code>Avatar</code>: Imagen de perfil del usuario
                                    </Text2>
                                </li>
                            </ul>
                            <Text2 regular>
                                <strong>Prueba el menú:</strong> Haz click en el avatar/nombre de usuario
                                en la parte superior derecha del NavigationBar.
                            </Text2>
                        </Stack>
                    </Stack>
                </Box>
            </ResponsiveLayout>
        </>
    );
};

export default NavbarWithUserMenuExample;
