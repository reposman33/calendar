import styled from "styled-components";

export const Calendar = styled.div`
	align-items: stretch;
	border: 1px solid #ccc;
	box-shadow: 0px 0px 10px 5px #69696b;
	display: flex;
	height: 50vh;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	width: 45vh;
`;

export const SCMonth = styled.div`
	align-items: center;
	box-shadow: 0px 0px 10px 0px #ccc;
	display: flex;
	flex-direction: column;
	height: 200px;
	justify-content: space-between;
	margin: 1rem;
	padding: 0.5rem;
	width: 275px;
`;

export const SCWeek = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 98%;
	height: 15%;
	margin: 1px auto;
`;

export const SCDay = styled.span`
	background-color: ${(props) => (props.day ? "#a6c4de" : "#f0f8ff")};
	cursor: ${(props) => (props.day ? "pointer" : "default")};
	display: flex;
	width: 12%;
	font-size: 0.7rem;
	font-weight: bold;
	justify-content: center;
	align-items: center;
	height: 100%;
	border: ${(props) => (props.selected ? "1px solid #ec2929" : "none")};
	border-radius: ${(props) => (props.selected ? "50%" : "none")};
	&:hover {
		background-color: ;
	}
`;
