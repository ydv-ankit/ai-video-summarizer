import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Link } from "react-router";

const Home = () => {
	return (
		<div className="relative flex  flex-col md:flex-row md:items-center md:justify-center h-screen w-full  bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 ">
			<div className="flex-2/3 flex md:items-center md:justify-center text-gray-100">
				<div className="flex flex-col items-center md:justify-center mx-4 md:mx-24 mt-10 md:mt-0">
					<div className="md:text-5xl text-2xl font-bold text-justify">
						Transform hours of video into concise summaries in minutes.
					</div>
					<div className="text-pink-200 mt-6 text-sm md:text-xl">
						Our AI-powered video summarizer intelligently extracts key moments, ensuring you never
						miss important content. Experience the future of video consumption with unparalleled
						efficiency.
					</div>
					<div className="flex items-center justify-between mt-8 w-full">
						<div className="flex flex-col justify-center max-w-52">
							<div className="text-xl md:text-3xl font-bold">Efficiency</div>
							<div className="text-sm md:text-lg">Save time and enhance your productivity.</div>
						</div>
						<div className="flex flex-col justify-center max-w-52">
							<div className="text-xl md:text-3xl font-bold">Clarity</div>
							<div className="text-sm md:text-lg">Get clear insights from lengthy videos.</div>
						</div>
					</div>
					<div className="w-full mt-8">
						<Link to={"/summarize"}>
							<InteractiveHoverButton className="text-gray-800">Get Started</InteractiveHoverButton>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex-1/3 hidden lg:flex items-center justify-center mx-10">
				<img src="icon.ico" alt="logo" className="w-[470px]" />
			</div>
		</div>
	);
};

export default Home;
