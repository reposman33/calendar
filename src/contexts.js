import React, { useState, createContext } from "react";
import { I18n } from "./I18n";

export const CalendarContext = createContext();

export const CalendarContextProvider = ({ children }) => {
	const [alarmWindowVisible, setAlarmWindowVisible] = useState(false);
	const [alarms, updateAlarms] = useState([]);
	const hideAlarmWindow = () => setAlarmWindowVisible(false);
	const showAlarmWindow = () => setAlarmWindowVisible(true);

	return (
		<CalendarContext.Provider
			value={{
				alarmWindowVisible,
				setAlarmWindowVisible,
				hideAlarmWindow,
				showAlarmWindow,
				I18n,
				alarms,
				updateAlarms,
			}}>
			{children}
		</CalendarContext.Provider>
	);
};
