'use client';

import React from 'react';
import { BarChart, XAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts';

import SectionHeader from './SectionHeader';

interface YearBarDiagramProps {
  data: { name: string; travellers: number }[];
}

const YearBarDiagram: React.FC<YearBarDiagramProps> = ({ data }) => {
  return (
    <section className="max-w-[1400px] w-full py-20 px-4 md:px-12 bg-white flex flex-col">
      <SectionHeader
        title="Vilka år emigrerade Marks invånare som mest?"
        span="Endast Älekulla socken"
      />
      <ResponsiveContainer width={'100%'} height={450}>
        <BarChart data={data} margin={{ top: 20 }}>
          <XAxis dataKey="name" angle={90} textAnchor="bottom" height={40} />
          <Tooltip />
          <Bar
            dataKey="emigranter"
            fill="#353831"
            label={{ fontSize: 12, fill: '#353831', position: 'top' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default YearBarDiagram;
