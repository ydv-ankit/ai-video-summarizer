import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Home = () => {
	return (
		<div>
			<Link to={"/signup"}>
				<Button>Sign Up</Button>
			</Link>
		</div>
	);
};

export default Home;
