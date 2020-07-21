export const Alarm = {
	checkAlarm(alarm) {
		return new Date(alarm.alarmTime).getTime() <= new Date().getTime();
	},
};
