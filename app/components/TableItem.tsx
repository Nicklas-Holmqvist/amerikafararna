import React from 'react';
import { Person } from '../page';

interface TableItemProps {
  person: Person;
}

const TableItem: React.FC<TableItemProps> = ({ person }) => {
  return <div>ListItem</div>;
};

export default TableItem;
