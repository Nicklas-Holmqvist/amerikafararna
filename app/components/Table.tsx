import React from 'react';

import { Data } from '../page';

interface TableProps {
  data: Data;
}

const titles = [
  'Förnamn',
  'Efternamn',
  'Födelsedatum',
  'Utfl datum',
  'Utfl plats',
  'Infl datum',
];

const ListItem: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <tr>
        {titles.map((title, index) => (
          <th className="text-start px-2 pb-1" key={index}>
            {title}
          </th>
        ))}
      </tr>
      {data.person.map((person, index) => (
        <tr key={index} className=" border">
          <td className="px-2 py-2">{person.first_name}</td>
          <td className="px-2 py-2">{person.last_name}</td>
          <td className="px-2 py-2">{person.year_of_birth}</td>
          <td className="px-2 py-2">{person.emigration_date}</td>
          <td className="px-2 py-2">{person.emigration_from}</td>
          <td className="px-2 py-2">{person.immigration_date}</td>
          <td className="px-6">
            <a href="" className="text-sm">
              Läs mer
            </a>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ListItem;
