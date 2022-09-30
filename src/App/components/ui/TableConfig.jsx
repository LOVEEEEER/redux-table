import Table from "../common/Table/Table";
import { useDispatch } from "react-redux";
import { setStatus } from "../../store/items";

const TableConfig = ({ onBuy, ...rest }) => {
  const dispatch = useDispatch();
  const onClickBuy = (id) => {
    dispatch(setStatus(id));
    onBuy(id);
  };
  const columns = {
    project: {
      path: "name",
      name: "Project",
    },
    tokenType: {
      path: "type",
      name: "Token type",
    },
    conditions: {
      path: "conditions",
      name: "Conditions",
    },
    volume: {
      path: "volume",
      name: "Volume",
    },
    roi: {
      path: "roi",
      name: "ROI",
    },
    free: {
      path: "free",
      name: "Free float",
    },
    hedge: {
      path: "hedge",
      name: "Insurance hedge",
    },
    buy: {
      component: (item) => (
        <button onClick={() => onClickBuy(item.id)} className="btn btn-info">
          buy
        </button>
      ),
    },
  };
  return <Table columns={columns} {...rest} />;
};

export default TableConfig;
