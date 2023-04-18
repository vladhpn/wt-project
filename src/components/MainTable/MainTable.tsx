import { FC } from 'react';

import { IMainTableProps } from './type';

export const MainTable: FC<IMainTableProps> = ({
  tableHeader,
  filteredData,
  handleSort,
  sortKey,
  sortDirection,
}) => {
  return (
    <table className="w-full text-xl text-left text-gray-500 ">
      <thead className="text-md text-gray-700 uppercase bg-gray-50">
        <tr>
          {tableHeader.map(({ id, title }) => {
            return (
              <th
                key={id}
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort(id)}>
                {title}
                {sortKey === id && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((data: any) => {
          return (
            <tr
              key={data.id}
              className="border border-blue-300 rounded-lg bg-blue-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {data.name}
              </th>
              <td className="px-6 py-4">{data.dosage} таблетки</td>
              <td className="px-6 py-4">{data.repetitions}/день</td>
              <td className="px-6 py-4">{data.startDate}</td>
              <td className="px-6 py-4">{data.endDate}</td>
              <td className="px-6 py-4">{data.duration} днів</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
