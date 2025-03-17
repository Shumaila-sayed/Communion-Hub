import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom";
import '../styles/home.css'
import CustomCarousel from "../Components/ImageSlider";
import images from '../data/images';

const Home = () => {
    return (
			<>
				<Header />

				<section className='welcome'>
					<h2>Welcome to CommunionHub</h2>
					<p className='welcome-para'>
						CommunionHub is a platform dedicated to fostering unity among people
						of all faiths and backgrounds. Whether you’re looking for religious
						gatherings, social events, or charitable initiatives, we provide a
						space where you can engage with your community and make meaningful
						connections.
					</p>
					<button>
						<Link to='/events'> Explore Events</Link>
						<img
							src='./arrow.svg'
							alt=''
						/>
					</button>
				</section>

				<section className='content'>
					<div className='content-text'>
						<h2>Connecting People Across Faiths & Interests</h2>
						<p>
							Bringing communities together through shared experiences.
							Discover, connect, and participate in events that matter to you.
						</p>
						<button>
							<Link to='/events'> Explore Events</Link>
							<img
								src='./arrow.svg'
								alt=''
							/>
						</button>
					</div>
					<CustomCarousel>
					{images.map((image, index) => {
						return (
							<img
								key={index}
								src={image.imgURL}
								alt={image.imgAlt}
							/>
						);
					})}
				  </CustomCarousel>
				</section>
				

				<Footer />
			</>
		);
}

export default Home