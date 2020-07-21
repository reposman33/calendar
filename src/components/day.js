import React, { useContext } from "react";
import { CalendarContext } from "../contexts";

import { SCDay } from "./styled/components";

export const Day = ({ day = "", selected = false }) => {
	const { showAlarmWindow } = useContext(CalendarContext);

	return (
		<SCDay day={day} selected={selected} onClick={showAlarmWindow}>
			{day || ""}
		</SCDay>
	);
};
