import "../mydatatable/mydatatable.scss"
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
  {
    valueGetter: (value, row) => ``,
  },
];

const rows = [
  { id: 1, firstName: "Susu"},
  { id: 2, firstName: "Soda"},
  { id: 3, firstName: "Kopi"},
  { id: 4, firstName: "Gula"},
  { id: 5, firstName: "Es Krim"},
  { id: 6, firstName: "Mie"},
  { id: 7, firstName: "Sosis"},
  { id: 8, firstName: "Bon Cabe"},
  { id: 9, firstName: "Teh"},
  { id: 10,firstName: "Garam"},
];

const actionColumn = [
  {
    field: "action",
    headerName: "",
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="" style={{ textDecoration: "none" }}>
          </Link>
        </div>
      );
    },
  },
];

const Mydatatable = ({title}) => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        {title}
      </div>
      <DataGrid className="datagrid"
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;
