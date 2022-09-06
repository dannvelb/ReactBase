import { Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import ButtonComponent from "./button.common";

type THeaderDetailComponent = {
	title?: string;
	subtitle?: string;
	smallLetter?: string;
};

export const HeaderDetailComponent: FunctionComponent<
	THeaderDetailComponent
> = ({ title, subtitle, smallLetter }) => {
	const navigate = useNavigate();
	return (
		<div className="col-12">
			<div className="col-12 d-flex align-items-center pt-2">
				<div className="col-3">
					<ButtonComponent
						onClick={() => {
							navigate(-1);
						}}>
						Atras
					</ButtonComponent>
				</div>
			</div>
			<div className="col-12 d-flex flex-wrap px-3">
				<Typography variant="h4" className="col-12">{title}</Typography>
				<Typography className="px-1 w-100" variant="subtitle2" >{subtitle}</Typography>
				<Typography className="px-1 w-100" variant="caption">{smallLetter}</Typography>
			</div>
		</div>
	);
};
HeaderDetailComponent.defaultProps = {
    title:'',
    subtitle:'',
    smallLetter:''
};

export default HeaderDetailComponent;
