import styled from "styled-components";
import React from "react";

const Loading = styled.div`
  width: 100%;
  padding: 25px;
  bottom: 0px;
  bottom: 15px;
  text-align: center;
  background-color: white;
`;

const AnimacaoCarregamento = () => {
  return (
    <Loading>
      <div className="spinner-border text-primary" role="status">
        C
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-green" role="status">
        A
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-yellow" role="status">
        R
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-danger" role="status">
        R
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-warning" role="status">
        E
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-info" role="status">
        G
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-light" role="status">
        A
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-dark" role="status">
        D
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-gray" role="status">
        O
        <span className="sr-only">Loading...</span>
      </div>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    </Loading>
  );
};

export default AnimacaoCarregamento;
