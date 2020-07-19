import React, { useState, useContext } from "react";
import moment from "moment";
import { Month } from "./month";
import { Day } from "./day";
import { Week } from "./week";
import { AlarmWindow } from "./alarmWindow";
import { CalendarContext } from "../contexts";

export const CalendarWidget = () => {
	// initialize local state
	const [monthIncrement, setMonthIncrement] = useState(0);
	const { alarmWindowVisible } = useContext(CalendarContext);
	const incrementMonth = () => setMonthIncrement(monthIncrement + 1);
	const subtractMonth = () => setMonthIncrement(monthIncrement - 1);

	const today = parseInt(moment().add(monthIncrement, "M").format("DD")); // get current date in month 0-31
	const firstWeekDayOfMonth = moment().add(monthIncrement, "M").startOf("month").day(); // get the ordinal of the first date of the month 0-6
	const daysInMonth = moment().add(monthIncrement, "M").daysInMonth(); // get the nr of days in current month
	const weekDays = [];
	let week = [];
	const month = [];
	const currentMonth = moment().add(monthIncrement, "M").format("MMMM");
	const displayedMonth = moment().add("M").format("MMMM");

	const monthHeader = (
		<div>
			<span onClick={subtractMonth}>&lt;</span>
			<span>
				{currentMonth} {moment().add(monthIncrement, "M").format("YYYY")}
			</span>
			<span onClick={incrementMonth}>&gt;</span>
		</div>
	);

	for (let i = 0; i < 7; i++) {
		const dayOfWeek = moment().add(monthIncrement, "M").weekday(i).format("dd");
		weekDays.push(
			<Day key={dayOfWeek} day={dayOfWeek}>
				{dayOfWeek}
			</Day>
		);
	}

	for (let i = 0; i < firstWeekDayOfMonth; i++) {
		week.push(<Day key={"0" + i} />);
	}

	for (let i = 1; i <= daysInMonth; i++) {
		const selected = i === today && displayedMonth === currentMonth;
		if (week.length === 7) {
			month.push(week); // add current week to monthArray
			week = []; // empty week
			week.push(
				// add day to new week
				<Day key={i} day={i} selected={selected} />
			);
		} else {
			week.push(<Day key={i} day={i} selected={selected} />);
		}
	}

	// add remaining days to week
	for (let i = week.length; i < 7; i++) {
		week.push(<Day key={i} />);
	}

	month.push(week);

	return (
		<div>
			<Month>
				{monthHeader}
				<Week>{weekDays.map((day) => day)}</Week>
				{month.map((week, weekIndex) => (
					<Week key={100 * weekIndex}>{week.map((day) => day)}</Week>
				))}
			</Month>
			{alarmWindowVisible ? <AlarmWindow /> : ""}
		</div>
	);
};
