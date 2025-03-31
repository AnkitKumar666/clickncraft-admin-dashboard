import DataTable from '../components/DataTable';

const Products = () => {
    const products = [
        { id: 1, name: 'Premium Widget', category: 'Electronics', price: '$129.99', stock: 45, status: 'Active' },
        { id: 2, name: 'Basic Widget', category: 'Electronics', price: '$59.99', stock: 112, status: 'Active' },
        { id: 3, name: 'Deluxe Package', category: 'Bundle', price: '$249.99', stock: 18, status: 'Active' },
        { id: 4, name: 'Standard Widget', category: 'Electronics', price: '$79.99', stock: 76, status: 'Active' },
        { id: 5, name: 'Starter Kit', category: 'Bundle', price: '$149.99', stock: 32, status: 'Low Stock' },
    ];

    const columns = [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Product Name' },
        { key: 'category', title: 'Category' },
        { key: 'price', title: 'Price' },
        { key: 'stock', title: 'Stock' },
        { key: 'status', title: 'Status' },
    ];

    return (
        <div className="page">
            <h1 className="page-title">Product Management</h1>
            <DataTable
                data={products}
                columns={columns}
                itemsPerPage={5}
            />
        </div>
    );
};

export default Products;