const TableHeader = ({ columns, selectedSort, onSort }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };
  const renderSortArrow = (selectedSort, currentPath) => {
    if (selectedSort.path === currentPath) {
      if (selectedSort.order === "asc") {
        return <i className="bi bi-caret-down-fill"></i>;
      }
      return <i className="bi bi-caret-up-fill"></i>;
    }
    return null;
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            role={columns[column].path ? "button" : null}
            onClick={() => handleSort(columns[column].path)}
            key={column}
          >
            {columns[column].name}
            {renderSortArrow(selectedSort, columns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
