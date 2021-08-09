export const columns = [
  {
    name: 'ID',
    minWidth: '197',
    sortable: true,
    cell: (row) => (
      <Link />
    )
  },
  {
    name: 'Name',
    minWidth: '197',
    sortable: false,
    cell: (row) => (
      <div>
        <h5>{row.name}</h5>
        <small>{row.description}</small>
      </div>
    )
  }
]
