import { useState } from "react";
import { useSelector } from "react-redux";
import TableConfig from "../ui/TableConfig";
import _ from "lodash";
import { useEffect } from "react";

const TablePage = () => {
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const items = useSelector((state) => state.toolkit.items);
  const [filter, setFilter] = useState(items);
  useEffect(() => {
    setFilter(items);
  }, [items]);
  const handleSort = (sort) => {
    setSortBy(sort);
  };
  const handleBuy = (id) => {
    console.log(id);
  };
  const sortedItems = _.orderBy(filter, [sortBy.path], [sortBy.order]);

  return (
    <>
      <button
        className="btn btn-success m-3"
        onClick={() => setFilter(items.filter((el) => el.status === "success"))}
      >
        Success
      </button>
      <button
        className="btn btn-danger m-3"
        onClick={() => setFilter(items.filter((el) => el.status === "danger"))}
      >
        Danger
      </button>
      <button
        className="btn btn-secondary m-3"
        onClick={() => setFilter(items.filter((el) => el))}
      >
        All
      </button>
      <TableConfig
        items={sortedItems}
        selectedSort={sortBy}
        onSort={handleSort}
        onBuy={handleBuy}
      />
    </>
  );
};

export default TablePage;
