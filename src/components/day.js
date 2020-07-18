import React from "react";
import { SCDay } from "./styled/components";

export const Day = ({ day = "", selected = false }) => {
	return (
		<SCDay day={day} selected={selected}>
			{day || ""}
		</SCDay>
	);
};
