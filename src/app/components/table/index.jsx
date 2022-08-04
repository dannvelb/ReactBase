import React from "react";
import { Spinner, Table } from "react-bootstrap";
import PropTypes from "prop-types";
export const TableComponent = ({ settings = {}, data = [], isLoading }) => {
  const getColumnsTable = () => Object.keys(settings);

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
              size="lg"
              role="status"
              aria-hidden="true"
            />
          </div>
        )}
        {!isLoading && data.length === 0 && (
          <div className="content-loader">No hay resultados</div>
        )}
      </div>
    </div>
  );
};

TableComponent.prototype = {
  tableConfig: PropTypes.Object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default TableComponent;
