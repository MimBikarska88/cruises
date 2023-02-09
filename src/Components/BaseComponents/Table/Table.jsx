import { useMemo } from "react";
import { useTable, useGlobalFilter, useRowSelect } from "react-table";
import Button from "../Button/Button";
import Checkbox from "../CheckBox/CheckBox";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
import styles from "./Table.module.css";
const Table = (props) => {
  const { cols, data, title, callback } = props;

  const tableColumns = useMemo(() => cols, []);
  const tableData = useMemo(() => data, []);

  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useGlobalFilter,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((tableColumns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...tableColumns,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <h4 className="text-center mt-3 mb-3">{title}</h4>

      <div className="d-grid">
        <div className="row">
          <div className="col">
            <div className="">
              <ul class="list-group d-block list-group-flush">
                {selectedFlatRows
                  .map((row) => row.values)
                  .map((value) => (
                    <li className="list-group-item">
                      {value.code} - {value.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col">
            <div className={`${styles.tableFrame}`}>
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
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
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
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">{props.children}</div>
    </>
  );
};
export default Table;
