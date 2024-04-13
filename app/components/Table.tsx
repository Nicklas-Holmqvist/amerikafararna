import React from 'react';

import { Person } from '../page';

interface TableProps {
  data: Person[];
}

const titles = [
  'Förnamn',
  'Efternamn',
  'Födelsedatum',
  'Utfl datum',
  'Plats',
  'Infl datum',
];

const ListItem: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-[1200px]">
      <tr>
        {titles.map((title, index) => (
          <th className="text-start px-2 pb-3" key={index}>
            {title}
          </th>
        ))}
      </tr>
      {data.map((person, index) => (
        <tr key={index} className="border hover:bg-gray-200 hover:cursor">
          <td className="px-2 py-2">{person.first_name}</td>
          <td className="px-2 py-2">{person.last_name}</td>
          <td className="px-2 py-2">{person.year_of_birth}</td>
          <td className="px-2 py-2">{person.emigration_date}</td>
          <td className="px-2 py-2">{person.emigration_from}</td>
          <td className="px-2 py-2">{person.immigration_date}</td>
          <td className="px-6">
            <a
              href={`https://amerikafararna.vercel.app/record/${person.id}`}
              className="text-sm">
              Läs mer
            </a>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ListItem;
