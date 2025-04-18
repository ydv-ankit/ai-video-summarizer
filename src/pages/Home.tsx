import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Home = () => {
	return (
		<div className="relative flex items-center justify-center h-screen w-full bg-slate-100">
			<div className="flex-1/2 flex items-center justify-center">
				<div className="flex flex-col items-center justify-center mx-14">
					<div className="md:text-5xl font-bold text-justify">
						Transform hours of video into concise summaries in minutes.
					</div>
					<div className="text-gray-900 mt-6">
						Our AI-powered video summarizer intelligently extracts key moments, ensuring you never
						miss important content. Experience the future of video consumption with unparalleled
						efficiency.
					</div>
					<div className="flex items-center justify-between mt-8 w-full">
						<div className="flex flex-col justify-center max-w-52">
							<div className="text-3xl font-bold">Efficiency</div>
							<div className="">Save time and enhance your productivity.</div>
						</div>
						<div className="flex flex-col justify-center max-w-52">
							<div className="text-3xl font-bold">Clarity</div>
							<div>Get clear insights from lengthy videos.</div>
						</div>
					</div>
					<div className="w-full mt-8">
						<InteractiveHoverButton>Get Started</InteractiveHoverButton>
					</div>
				</div>
			</div>
			<div className="flex-1/2 flex items-center justify-center">
				<img src="icon.ico" alt="logo" className="w-[470px]" />
			</div>
		</div>
	);
};

export default Home;
