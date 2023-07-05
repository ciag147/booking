export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://img.pikbest.com/png-images/qianku/default-avatar_2405039.png!w700wp"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 170,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];