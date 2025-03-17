import '../styles/event.css';
import { useState, useRef } from 'react';

const Event = () => {
	const [filter, setFilter] = useState('All');
	const [events, setEvents] = useState([
		{
			title: 'Charity Drive',
			date: '20-03-2025',
			location: 'NYC',
			category: 'Charity',
			description:
				"Join us for a community-led charity drive to support underprivileged families. Donate clothes, food, and essential supplies to make a difference in someone's life.",
		},
		{
			title: 'Interfaith Dialogue',
			date: '10-04-2025',
			location: 'LA',
			category: 'Religious',
			description:
				'A meaningful discussion bringing together people from different faiths to promote understanding, respect, and unity. Engage in open conversations and learn about diverse beliefs.',
		},
		{
			title: 'Community Social Night',
			date: '22-04-2025',
			location: 'Chicago',
			category: 'Social',
			description:
				'An evening of fun, networking, and entertainment! Meet new people, enjoy live music, and participate in engaging activities designed to strengthen community bonds.',
		},
		{
			title: 'Youth Leadership Summit',
			date: '2025-05-05',
			location: 'Houston',
			category: 'Social',
			description:
				'The Youth Leadership Summit is a one-day event designed to inspire and empower young individuals to become future leaders. Empowering young leaders through inspiring talks and networking opportunities.',
		},
		{
			title: 'Fundraiser for Local Schools',
			date: '2025-06-12',
			location: 'San Francisco',
			category: 'Charity',
			description:
				'This event will include live music performances, silent auctions, and community-driven donation drives. Every contribution helps ensure a brighter future for children in need.',
		},
		{
			title: 'Spiritual Retreat',
			date: '2025-07-18',
			location: 'Miami',
			category: 'Religious',
			description:
				'Escape the stress of daily life and embark on a transformational spiritual journey at our weekend retreat. A peaceful retreat focusing on mindfulness, meditation, and spiritual growth.',
		},
	]);

	const [newEvent, setNewEvent] = useState({
		title: '',
		date: '',
		location: '',
		category: 'Religious',
		description: '',
	});

	const dialogRef = useRef(null);

    const openModal = () => {
        dialogRef.current.showModal();
    }

	const closeModal = () => {
		dialogRef.current.close();
	};

	const filteredEvent =
			filter === 'All'
				? events
				: events.filter((event) => event.category === filter);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewEvent((prev) => ({ ...prev, [name]: value }));
	};

	 const addEvent = (e) => {
			e.preventDefault();
			setEvents([...events, { ...newEvent }]);
			closeModal();
			setNewEvent({
				title: '',
				date: '',
				location: '',
				category: 'All',
				description: '',
			});
		};

		return (
			<>
				<section>
					<div className='event-header'>
						<div>
							<h2>Discover <em>&</em> Join Events</h2>
							<p>We Helped Communities Connect & Flourish</p>
						</div>
						<img
							src='./group-of-people.jpg'
							alt=''
						/>
					</div>

					<div className='controls'>
						<label>
							Filter by Category:
							<select
								value={filter}
								onChange={(e) => setFilter(e.target.value)}
							>
								<option value='All'>All</option>
								<option value='Religious'>Religious</option>
								<option value='Social'>Social</option>
								<option value='Charity'>Charity</option>
							</select>
						</label>

						<button onClick={openModal}>+ Add Event</button>
					</div>
				</section>

				<section className='all-events'>
					{filteredEvent.map((event, index) => (
						<div
							key={index + 1}
							className='card'
						>
							<h3>{event.title}</h3>
							<p>
								{event.date} | {event.location}
							</p>
							<p>{event.description}</p>
						</div>
					))}
				</section>

				<dialog ref={dialogRef}>
					<form onSubmit={addEvent}>
						<span
							className='close-mark'
							onClick={closeModal}
							title='Close'
						>
							&times;
						</span>
						<h4>Add a New Event</h4>
						<div className='form-fields'>
							<input
								type='text'
								name='title'
								placeholder='Event Title'
								required
								onChange={handleInputChange}
								value={newEvent.title}
							/>
							<input
								type='date'
								name='date'
								required
								onChange={handleInputChange}
								value={newEvent.date}
							/>
							<input
								type='text'
								name='location'
								placeholder='Location'
								required
								onChange={handleInputChange}
								value={newEvent.location}
							/>
							<select
								name='category'
								onChange={handleInputChange}
								value={newEvent.category}
							>
								<option value='Religious'>Religious</option>
								<option value='Social'>Social</option>
								<option value='Charity'>Charity</option>
							</select>
							<textarea
								name='description'
								placeholder='Event Description'
								required
								onChange={handleInputChange}
								value={newEvent.description}
								rows='5'
							></textarea>
							<button type='submit'>Add Event</button>
						</div>
					</form>
				</dialog>
			</>
		);
	};

export default Event;