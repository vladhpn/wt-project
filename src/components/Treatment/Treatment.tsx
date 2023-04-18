import { SetStateAction, useState } from 'react';

import { tableData, tableHeader } from '../../api';
import { MainTable } from '../MainTable/MainTable';

export const Treatment = () => {
  const [sortKey, setSortKey] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterText, setFilterText] = useState('');

  const sortData = (data: any) => {
    return data.sort((a: { [x: string]: any }, b: { [x: string]: any }) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const filterData = (data: any[]) => {
    return data.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(filterText.toLowerCase()),
    );
  };

  const handleSort = (key: SetStateAction<string>) => {
    if (key === sortKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const handleFilter = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterText(event.target.value);
  };

  const sortedData = sortData(tableData);
  const filteredData = filterData(sortedData);

  return (
    <>
      <div className="flex items-center mb-4">
        <label
          htmlFor="filter"
          className="mr-2 block text-md font-medium text-gray-900">
          Пошук по назві
        </label>
        <input
          id="filter"
          type="text"
          value={filterText}
          onChange={handleFilter}
          className="border border-gray-300 bg-gray-50 text-md rounded-lg px-2 py-1"
        />
      </div>

      <MainTable
        tableHeader={tableHeader}
        filteredData={filteredData}
        handleSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
      />
    </>
  );
};
