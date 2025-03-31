import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Electronics', value: 4000 },
    { name: 'Clothing', value: 3000 },
    { name: 'Home Goods', value: 2000 },
    { name: 'Beauty', value: 2780 },
    { name: 'Sports', value: 1890 },
];

const CustomBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey="value"
                    fill="#4361ee"
                    radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;