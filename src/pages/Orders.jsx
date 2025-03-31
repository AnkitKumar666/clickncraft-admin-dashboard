import DataTable from '../components/DataTable';

const Orders = () => {
    const orders = [
        { id: 1, customer: 'John Doe', product: 'Premium Widget', date: '2023-05-15', status: 'Completed', amount: '$129.99' },
        { id: 2, customer: 'Jane Smith', product: 'Basic Widget', date: '2023-05-14', status: 'Shipped', amount: '$59.99' },
        { id: 3, customer: 'Robert Johnson', product: 'Deluxe Package', date: '2023-05-14', status: 'Processing', amount: '$249.99' },
        { id: 4, customer: 'Emily Davis', product: 'Standard Widget', date: '2023-05-13', status: 'Completed', amount: '$79.99' },
        { id: 5, customer: 'Michael Wilson', product: 'Premium Widget', date: '2023-05-12', status: 'Completed', amount: '$129.99' },
    ];

    const columns = [
        { key: 'id', title: 'Order ID' },
        { key: 'customer', title: 'Customer' },
        { key: 'product', title: 'Product' },
        { key: 'date', title: 'Date' },
        { key: 'status', title: 'Status' },
        { key: 'amount', title: 'Amount' },
    ];

    return (
        <div className="page">
            <h1 className="page-title">Orders Management</h1>
            <DataTable
                data={orders}
                columns={columns}
                itemsPerPage={5}
            />
        </div>
    );
};

export default Orders;