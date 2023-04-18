import { ITableData, ITableHeader } from '../../types';

export interface IMainTableProps {
  tableHeader: ITableHeader[];
  filteredData: ITableData[];
  handleSort: (id: string) => void;
  sortKey: string;
  sortDirection: string;
}
