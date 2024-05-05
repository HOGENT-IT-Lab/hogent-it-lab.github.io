import { useTranslation } from 'react-i18next';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import nlBE from 'date-fns/locale/nl-BE';
import members from '../api/members.JSON';
import events from '../api/events.JSON';
import styles from 'react-big-calendar/lib/sass/styles.scss';
// import styles from '@/styles/home.module.scss';

export default function Home() {
	const { t } = useTranslation();

	const locales = {
		'nl-BE': nlBE,
	};

	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales,
	});

	const calendarStyle = {
		border: '1px solid #ccc',
		borderRadius: '5px',
		height: '500px',
	};

	const parseEventsDates = (events) => {
		return events.map((event) => ({
			...event,
			start: new Date(event.start),
			end: new Date(event.end),
		}));
	};

	const parsedEvents = parseEventsDates(events);

	return (
		<div className="flex flex-col items-center">
			<div className="pb-3 text-center">
				<h4>{t('welcome')}</h4>
			</div>
			<div className="h-[500px] w-[95vw] rounded border border-gh-border md:w-[800px]">
				<Calendar
					style={styles}
					localizer={localizer}
					events={parsedEvents}
					startAccessor="start"
					endAccessor="end"
					defaultView="week"
				/>
			</div>
		</div>
	);
}
