import React from "react";
import { ActionButtons } from "./styles";

const BotoesDeAcao = ({handleDownloadsItems}) => {
  return (
    <>
      <ActionButtons title="Fazer download" className="h2 mr-4" onClick={handleDownloadsItems}>
        <i className="fas fa-download text-light"></i>
      </ActionButtons>
    </>
  );
};

export default BotoesDeAcao;
