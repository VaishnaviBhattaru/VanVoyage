import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jul', value: 4000 },
  { name: 'Aug', value: 1000 },
  { name: 'Sep', value: 3000 },
  { name: 'Oct', value: 2000 },
  { name: 'Nvo', value: 1500 },
  { name: 'Dec', value: 500 },
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="40%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
        <Tooltip formatter={(value) => `$${value}`} />
        <Bar dataKey="value" fill="#FFA500" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
