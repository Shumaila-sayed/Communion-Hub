import '../styles/event.css'
import { useState } from 'react';

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
      ]);
    
    const filteredEvent = filter === 'All' ? events : events.filter((event) => event.category === filter);

    return (
			<>
				<section>
					<div className='event-header'>
						<h2>Discover & Join Events</h2>
						<p>We Helped Communities Connect & Flourish</p>
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

						<button>
							<a href=''>+  Add Event</a>
						</button>
					</div>
				</section>

				<section>
					{filteredEvent.map((event, index) => (
						<div key={index + 1}>
							<h3>{event.title}</h3>
							<p>
								<strong>Date:</strong> {event.date}
							</p>
							<p>
								<strong>Location:</strong> {event.location}
							</p>
							<p>
								<strong>Category:</strong> {event.category}
							</p>
							<p>{event.description}</p>
						</div>
					))}
				</section>
			</>
		);
}

export default Event