import React from "react";
import Button from "@material-ui/core/Button";

const CatButton = ({value, label, color, handleCatButton}) => {
  return (
    <Button value={value} style={{margin: "1%"}} variant="outlined" color={color} onClick={handleCatButton}>
      {label}
    </Button>
  );
};

export default CatButton;
