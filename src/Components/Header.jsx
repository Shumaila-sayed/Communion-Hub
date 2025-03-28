import '../styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
			<header>
				<h1><Link to='/'>CommunionHub</Link></h1>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/events'>Events</Link>
						</li>
						<li>About</li>
					</ul>
				</nav>
			</header>
		);
}

export default Header