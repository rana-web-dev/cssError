import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const total = useLoaderData();
  const react = total.data[0].total;
  const JavaScript = total.data[1].total;
  const css = total.data[2].total;
  const git = total.data[3].total;
  const Nreact = total.data[0].name;
  const NJavaScript = total.data[1].name;
  const Ncss = total.data[2].name;
  const Ngit = total.data[3].name;

    const data = [
        {
          name: `${Nreact}`,
          total: `${react}`,
          amt: 9,
        },
        {
          name: `${NJavaScript}`,
          total: `${JavaScript}`,
          amt: 3,
        },
        {
          name: `${Ncss}`,
          total: `${css}`,
          amt: 6,
        },
        {
          name: `${Ngit}`,
          total: `${git}`,
          amt: 11,
        }
      ];
    return (
        <div>
            <div>
                <LineChart width={400} height={200} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#0054ff"></Line>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};



export default Statistics;