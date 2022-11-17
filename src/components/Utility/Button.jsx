import React from "react";
import Button from "@mui/material/Button";

const CButton = ({ btnTitle, children, ...rest }) => {
	return (
		<Button size="small" variant="contained" id="btn" {...rest}>
			{btnTitle} {children}
		</Button>
	);
};

export default CButton;
