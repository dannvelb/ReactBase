import React, { FunctionComponent, useState } from "react";
import { Skeleton, Tab, Tabs } from "@mui/material";
import { ArrayConst, NumberConst } from "../../const/const";
import TabPanelComponent from "./tabs.panel.component";

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

type TTabItem = {
	label: string;
	Component: FunctionComponent<any>;
	props: any;
};

type TTabsComponent = {
	tabs: Array<TTabItem>;
	children?:any;
	classNameHead?:string;
};
export const TabsComponent: FunctionComponent<TTabsComponent> = ({
	tabs = ArrayConst.empty,
	children,
	classNameHead
}) => {
	const [tabSelected, setTabSelected] = useState<number>(NumberConst.zero);
	const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) =>
		setTabSelected(newValue);
	return (
		<div>
			<div className={classNameHead}>
				{children}
				<Tabs
					className="w-100"
					value={tabSelected}
					onChange={handleChangeTabs}
					centered>
					{tabs.map((tab, i) => (
						<Tab key={i} label={tab.label} {...a11yProps(i)} />
					))}
				</Tabs>
			</div>
			<div>
				{tabs.map(({ Component, props }, i) => (
					<TabPanelComponent key={i} index={i} value={tabSelected}>
						<Component {...props}></Component>
					</TabPanelComponent>
				))}
			</div>
		</div>
	);
};

export default TabsComponent;
