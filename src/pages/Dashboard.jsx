import Cards from '../components/Cards';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import DataTable from '../components/DataTable';

const Dashboard = () => {
    const recentOrders = [
        { id: 1, customer: 'John Doe', product: 'Premium Widget', date: '2023-05-15', status: 'Completed', amount: '$129.99' },
        { id: 2, customer: 'Jane Smith', product: 'Basic Widget', date: '2023-05-14', status: 'Shipped', amount: '$59.99' },
        { id: 3, customer: 'Robert Johnson', product: 'Deluxe Package', date: '2023-05-14', status: 'Processing', amount: '$249.99' },
        { id: 4, customer: 'Emily Davis', product: 'Standard Widget', date: '2023-05-13', status: 'Completed', amount: '$79.99' },
        { id: 5, customer: 'Michael Wilson', product: 'Premium Widget', date: '2023-05-12', status: 'Completed', amount: '$129.99' },
    ];

    const tableColumns = [
        { key: 'id', title: 'Order ID' },
        { key: 'customer', title: 'Customer' },
        { key: 'product', title: 'Product' },
        { key: 'date', title: 'Date' },
        { key: 'status', title: 'Status' },
        { key: 'amount', title: 'Amount' },
    ];

    return (
        <div className="dashboard">
            <h1 className="page-title">Dashboard Overview</h1>

            <Cards />

            <div className="chart-row">
                <div className="chart-container">
                    <h3>Sales Performance</h3>
                    <LineChart />
                </div>
                <div className="chart-container">
                    <h3>Revenue by Category</h3>
                    <BarChart />
                </div>
            </div>

            <div className="chart-row">
                <div className="chart-container">
                    <h3>Customer Distribution</h3>
                    <PieChart />
                </div>
                <div className="chart-container">
                    <h3>Recent Orders</h3>
                    <DataTable
                        data={recentOrders}
                        columns={tableColumns}
                        itemsPerPage={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;