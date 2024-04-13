'use client';

import { Person } from '@/app/page';
import React from 'react';

interface RecordProps {
  data: Person;
}

const Record: React.FC<RecordProps> = ({ data }) => {
  return <div>Record</div>;
};

export default Record;
