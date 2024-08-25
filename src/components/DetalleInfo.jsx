import React from "react";

const DetalleInfo = ({
  title,
  primaryValue,
  secondaryValue,
  additionalContent,
  className,
  leyendaDetalle,
}) => {
  return (
    <div
      className={`simuladorContainer_card_detalle ${
        className ? className : ""
      }`}
    >
      {title ? (
        <div className="simuladorContainer_card_detalle_titulo">
          {" "}
          <span>{title}</span> <span className="leyenda">{leyendaDetalle}</span>
        </div>
      ) : null}

      <div className="">
        <span className="primaryValue">{primaryValue}</span>
        {additionalContent && <>{additionalContent}</>}
        {secondaryValue ? <span>{secondaryValue}</span> : null}
      </div>
    </div>
  );
};

export default DetalleInfo;
