import React from "react";
import { CalendarWidget } from "./components/calendar";
import { CalendarContextProvider } from "./contexts";

import "./App.css";

function App() {
	return (
		<div className='container'>
			<CalendarContextProvider>
				<CalendarWidget />
			</CalendarContextProvider>
		</div>
	);
}

export default App;
