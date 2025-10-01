import * as React from 'react';
import {useRouter} from 'next/router';
import {
    ResponsiveLayout,
    Box,
    Stack,
    Title1,
    Text2,
    ButtonPrimary,
    ButtonSecondary,
    Table,
    Avatar,
    Inline,
    IconButton,
    MainSectionHeaderLayout,
    MainSectionHeader,
    useDialog,
} from '@telefonica/mistica';

// Mock icons - replace with actual Mistica icons
const IconEdit = () => <span>✏️</span>;
const IconDelete = () => <span>🗑️</span>;

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar?: string;
}

const UserAdministrationPage = () => {
    const router = useRouter();
    const {alert, confirm} = useDialog();
    const [users, setUsers] = React.useState<User[]>([
        {
            id: 1,
            name: 'María López Serrano',
            email: 'maria.lopez@example.com',
            role: 'Administrador',
        },
        {
            id: 2,
            name: 'Juan García Pérez',
            email: 'juan.garcia@example.com',
            role: 'Usuario',
        },
        {
            id: 3,
            name: 'Ana Martínez Ruiz',
            email: 'ana.martinez@example.com',
            role: 'Usuario',
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
            setUsers(users.filter((user) => user.id !== userId));
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
                        <ButtonPrimary onPress={handleAddUser}>Añadir usuario</ButtonPrimary>
                    }
                />
            </MainSectionHeaderLayout>

            <ResponsiveLayout>
                <Box paddingY={24}>
                    <Stack space={24}>
                        <Table
                            responsive
                            heading={['Usuario', 'Email', 'Rol', 'Acciones']}
                            content={users.map((user) => [
                                // Columna Usuario con Avatar
                                <Inline space={12} alignItems="center" key={`user-${user.id}`}>
                                    <Avatar
                                        size={40}
                                        initials={user.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                        src={user.avatar}
                                    />
                                    <Text2 regular>{user.name}</Text2>
                                </Inline>,
                                // Columna Email
                                <Text2 regular key={`email-${user.id}`}>
                                    {user.email}
                                </Text2>,
                                // Columna Rol
                                <Text2 regular key={`role-${user.id}`}>
                                    {user.role}
                                </Text2>,
                                // Columna Acciones
                                <Inline space={8} key={`actions-${user.id}`}>
                                    <button
                                        onClick={() => handleEditUser(user.id)}
                                        aria-label="Editar usuario"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                        }}
                                    >
                                        <IconEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        aria-label="Eliminar usuario"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                        }}
                                    >
                                        <IconDelete />
                                    </button>
                                </Inline>,
                            ])}
                        />

                        <Box>
                            <ButtonSecondary onPress={() => router.push('/')}>
                                Volver al inicio
                            </ButtonSecondary>
                        </Box>
                    </Stack>
                </Box>
            </ResponsiveLayout>
        </>
    );
};

export default UserAdministrationPage;
