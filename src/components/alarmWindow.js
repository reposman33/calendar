import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CalendarContext } from "../contexts";
import { Alarm } from "./alarm";

const StyledDiv = styled.div`
	background-color: #e0e6ec;
	box-shadow: 0px 0px 10px 5px rgba(105, 105, 107, 1);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
	position: absolute;
    top: 25vh;

	/* add right margin to input field labels  */
	& label {
		margin-right: 1rem;
		font-size: 0.85rem;
		font-weight: bold;
	}
	& input,
	.alarmWindow textarea {
		border: 2px inset #ccc;
	}
	/* style the window title container */
	& .windowTitle {
		background-color: #ed181c;
		color: #fff;
		display: flex;
		justify-content: center 1rem;
		margin: 0 -1rem 1rem;
		padding-right: 1rem;

		/* center the windowe title and right-align the close button */
		& span {
			margin-left: auto;
		}

		/* close button */
		& .close {
			cursor: pointer;
			color: white;
		}
	}
	/* layout of time input and subject input container */
	& .alarmTitle,
	.alarmTime {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
        justify-content: space-between;
        margin: 1rem 0;

		/* vertically align alarmwindow input field should*/
	}
	& .alarmTitle input {
		flex-grow: 2;
	}
	& .alarmTime input[type="datetime-local"] {
		/* size width of time input field  */
		flex-grow: 0.5;
	}
	/* size the textarea */
	& textarea {
		min-height: 100px;
	}
	/* layout of the buttons */
	& .buttons {
		display: flex;
		justify-content: flex-end;
        margin: 1rem 0;
    
        & button {
			background-color: #007bff;
			color: white;
			cursor: pointer;
			border: 1px solid transparent;
			border-color: #007bff;
			border-radius: 0.25rem;
			padding: 0.375rem 0.75rem;

			&:last-of-type {
				margin-left: 1rem;
			}
		}
	}
}
	`;

export const AlarmWindow = ({ description, level, time, title }) => {
	const [alarmTime, setAlarmTime] = useState(time);
	const [alarmTitle, setAlarmTitle] = useState(title);
	const [alarmDescription, setAlarmDescription] = useState(description);
	const [alarmLevel, setAlarmLevel] = useState(level);

	const { I18n } = useContext(CalendarContext);
	const { hideAlarmWindow } = useContext(CalendarContext);
	const { alarms, updateAlarms } = useContext(CalendarContext);

	const onChange = (e) => {
		switch (e.target.name) {
			case "alarmTime":
				setAlarmTime(e.target.value);
				break;
			case "alarmTitle":
				setAlarmTitle(e.target.value);
				break;
			case "alarmDescription":
				setAlarmDescription(e.target.value);
				break;
			case "alarmLevel":
				setAlarmLevel(e.target.value);
				break;
			default:
				console.log(e.target.name, " not defined");
		}
	};

	const addToAlarms = () => {
		updateAlarms([
			...alarms,
			{
				alarmTime,
				alarmTitle,
				alarmDescription,
				alarmLevel,
			},
		]);
		hideAlarmWindow();
	};

	return (
		<StyledDiv>
			<div className='windowTitle'>
				<span>{I18n.get("ALARMWINDOW.TITLE")}</span>
				<span className='close' onClick={hideAlarmWindow}>
					x
				</span>
			</div>
			<div className='alarmTime'>
				<label>{I18n.get("ALARMWINDOW.ALARMTIME.LABEL")}</label>
				<input name='alarmTime' type='datetime-local' onChange={onChange} value={alarmTime} disabled={!!time} />
			</div>
			<div className='alarmTitle'>
				<label>{I18n.get("ALARMWINDOW.ALARMTITLE.LABEL")}:</label>
				<input
					type='text'
					name='alarmTitle'
					onChange={onChange}
					value={alarmTitle}
					key='test'
					disabled={!!title}
				/>
			</div>
			<label>{I18n.get("ALARMWINDOW.DESCRIPTION.LABEL")}:</label>
			<textarea
				className='alarmDescription'
				name='alarmDescription'
				onChange={onChange}
				value={alarmDescription}
				disabled={!!description}></textarea>
			<div>
				<label htmlFor='alarmLevel'> {I18n.get("ALARMWINDOW.ALARMLEVEL.TITLE")}</label>
				<div>
					<input
						type='radio'
						name='alarmLevel'
						id='alarmLevelLow'
						value='low'
						onChange={onChange}
						disabled={!!level && !!alarmLevel}
						checked={alarmLevel === "low"}
					/>
					<label htmlFor='alarmLevelLow'> {I18n.get("ALARMWINDOW.ALARMLEVEL.LEVELLOW.LABEL")}</label>
					<input
						type='radio'
						name='alarmLevel'
						id='alarmLevelMedium'
						value='medium'
						onChange={onChange}
						disabled={!!level && !!alarmLevel}
						checked={alarmLevel === "medium"}
					/>
					<label htmlFor='alarmLevelMedium'>{I18n.get("ALARMWINDOW.ALARMLEVEL.LEVELMODERATE.LABEL")}</label>
					<input
						type='radio'
						name='alarmLevel'
						id='alarmLevelHigh'
						value='high'
						onChange={onChange}
						disabled={!!level && !!alarmLevel}
						checked={alarmLevel === "high"}
					/>
					<label htmlFor='alarmLevelHigh'>{I18n.get("ALARMWINDOW.ALARMLEVEL.LEVELHIGH.LABEL")}</label>
				</div>
			</div>
			<div className='buttons'>
				<button className='cancel' onClick={hideAlarmWindow}>
					{I18n.get("ALARMWINDOW.BUTTON.CANCEL.TEXT")}
				</button>
				<button className='save' onClick={addToAlarms}>
					{I18n.get("ALARMWINDOW.BUTTON.SAVE.TEXT")}
				</button>
			</div>
		</StyledDiv>
	);
};
