import DataTable from '../components/DataTable';

const Users = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', joined: '2023-01-15', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', joined: '2023-02-20', status: 'Active' },
        { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Customer', joined: '2023-03-10', status: 'Inactive' },
        { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor', joined: '2023-04-05', status: 'Active' },
        { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'Customer', joined: '2023-05-12', status: 'Active' },
    ];

    const columns = [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Name' },
        { key: 'email', title: 'Email' },
        { key: 'role', title: 'Role' },
        { key: 'joined', title: 'Joined Date' },
        { key: 'status', title: 'Status' },
    ];

    return (
        <div className="page">
            <h1 className="page-title">User Management</h1>
            <DataTable
                data={users}
                columns={columns}
                itemsPerPage={5}
            />
        </div>
    );
};

export default Users;