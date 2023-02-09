import { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
import styles from "./Table.module.css";
const Table = (props) => {
  const { cols, data } = props;

  const tableColumns = useMemo(() => cols, []);
  const tableData = useMemo(() => data, []);

  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
      ></GlobalFilter>
      <table
        {...getTableProps()}
        className={`table table-bordered ${styles.table}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
