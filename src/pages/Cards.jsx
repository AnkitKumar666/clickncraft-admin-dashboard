import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiUsers as FiUsersIcon } from 'react-icons/fi';

const Cards = () => {
    return (
        <div className="cards-container">
            <div className="card">
                <h3>Total Revenue</h3>
                <div className="value">$24,780</div>
                <div className="change positive">
                    <FiTrendingUp />
                    <span>12.5% from last month</span>
                </div>
            </div>

            <div className="card">
                <h3>Total Orders</h3>
                <div className="value">1,248</div>
                <div className="change positive">
                    <FiTrendingUp />
                    <span>8.3% from last month</span>
                </div>
            </div>

            <div className="card">
                <h3>Active Users</h3>
                <div className="value">842</div>
                <div className="change negative">
                    <FiTrendingDown />
                    <span>3.2% from last month</span>
                </div>
            </div>

            <div className="card">
                <h3>Avg. Order Value</h3>
                <div className="value">$89.54</div>
                <div className="change positive">
                    <FiTrendingUp />
                    <span>5.7% from last month</span>
                </div>
            </div>
        </div>
    );
};

export default Cards;