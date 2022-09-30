import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...rest} />
          <TableBody {...rest} />
        </>
      )}
    </table>
  );
};

export default Table;
