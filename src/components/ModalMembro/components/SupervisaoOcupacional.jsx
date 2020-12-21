import React from "react";
import { UncontrolledCollapse } from "reactstrap";

const SupervisaoOcupacional = ({member}) => {
  return (
    <>
      <h3 id="supervisao-ocupacional" className="heading-small border text-muted mb-4 btn w-100">
        5 - Supervisão Ocupacional
      </h3>
      <div>
        <UncontrolledCollapse toggler="#supervisao-ocupacional">

        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default SupervisaoOcupacional;
