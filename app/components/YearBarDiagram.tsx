'use client';

import React, { useEffect, useState } from 'react';
import {
  BarChart,
  XAxis,
  Bar,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from 'recharts';

interface YearBarDiagramProps {
  data: { name: string; travellers: number }[];
}

const YearBarDiagram: React.FC<YearBarDiagramProps> = ({ data }) => {
  const [WD, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    console.log(WD);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [WD]);

  return (
    <ResponsiveContainer width={'100%'} height={400}>
      <BarChart data={data}>
        {WD.width > 700 ? undefined : <Brush />}
        <XAxis dataKey="name" angle={90} textAnchor="bottom" height={40} />
        <Tooltip />
        <Bar
          dataKey="emigranter"
          fill="#353831"
          label={{ fontSize: 12, fill: '#353831', position: 'top' }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YearBarDiagram;
