import React from "react";
import { Spinner, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { TablePagination } from "@mui/material";
import { PagedCommonClass } from "../../pages/dashboard/curriculum";

export const TableComponent = ({
  settings = {},
  data = [],
  isLoading,
  infoPaged = new PagedCommonClass(),
  reload,
}) => {
  const getColumnsTable = () => Object.keys(settings);

  const handlePage = (event, page) => {
    console.log(page)
    reload({
      ...infoPaged,
      page: page + 1,
    });
  };

  const handleSize = (event) => {
    reload({
      ...infoPaged,
      page: 1,
      size: parseInt(event.target.value, 10),
    });
  };

  return (
    <div id="table-component">
      <div className="table-contain">
        <Table className="table-boots mb-0" striped bordered hover>
          <thead>
            <tr>
              {getColumnsTable().map((column, index) => (
                <th key={index}>{settings[column]?.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data.map((row, indexRow) => (
                <tr key={indexRow}>
                  {getColumnsTable().map((cell, indexCell) => (
                    <td className="" key={indexCell}>
                      {row[cell]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
        {isLoading && (
          <div className="content-loader">
            {" "}
            <Spinner
              as="span"
              animation="grow"
              role="status"
              aria-hidden="true"
            />
          </div>
        )}
        {!isLoading && data.length === 0 && (
          <div className="content-loader">No hay resultados</div>
        )}
      </div>
      {!isLoading && <div className="d-flex align-items-center justify-content-end">
        <TablePagination
          component="div"
          align="center"
          className="d-flex align-items-center"
          count={infoPaged.total}
          page={infoPaged.page > 0 ? infoPaged.page - 1 : 0}
          onPageChange={handlePage}
          rowsPerPage={infoPaged.size}
          onRowsPerPageChange={handleSize}
        />
      </div>}
    </div>
  );
};

TableComponent.prototype = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default TableComponent;
