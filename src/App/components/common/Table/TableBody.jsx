import _ from "lodash";
import { useNavigate } from "react-router-dom";

const TableBody = ({ items, columns }) => {
  const navigate = useNavigate();
  const renderContent = (item, column) => {
    if (columns[column].component) {
      const component = columns[column].component;
      if (typeof component === "function") {
        return component(item);
      }
      return component;
    }
    return _.get(item, columns[column].path);
  };
  const handleChangePage = ({ target }, id) => {
    const { tagName } = target;
    if (tagName === "BUTTON") return;
    navigate(`/project/${id}`);
  };
  return (
    <tbody>
      {items.map((item) => (
        <tr
          onClick={(e) => handleChangePage(e, item.id)}
          key={item.id}
          className={`table-${item.status}`}
        >
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
