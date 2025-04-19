import useAuthStore from "@/store/zustand";
import { Link } from "react-router";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ShinyButton } from "@/components/magicui/shiny-button";

export function Navbar() {
	const { user, removeUser } = useAuthStore((state) => state);
	const handleLogout = async () => {
		removeUser();
	};

	return (
		<nav className="relative w-full flex items-center justify-around p-2 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white shadow-md">
			<div className="flex items-center justify-center gap-2">
				<img src="icon.ico" alt="logo" className="w-10 h-10" />
				<span className="font-semibold text-xl">QuickVideo</span>
			</div>
			<div className="flex items-center justify-center space-x-2">
				<Link to={"/"}>
					<div className="text-lg cursor-pointer hover:underline rounded-md p-1 mx-2">Home</div>
				</Link>
				<Link to={"/summarize"}>
					<div className="text-lg cursor-pointer hover:underline rounded-md p-1">Summarize</div>
				</Link>
				{user ? (
					<>
						<div className="flex items-center justify-center p-1 border rounded-md gap-1">
							<span className="text-neutral-400">{user.tokens}</span>
							<img src="coin.png" alt="token" className="w-4 h-4" />
						</div>
						<div>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Avatar>
										<AvatarImage
											src={`https://ui-avatars.com/api/?name=${user?.email.split("@")[0]}`}
											className="cursor-pointer"
										/>
										<AvatarFallback>{user.email.substring(0, 2)}</AvatarFallback>
									</Avatar>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuLabel className="text-sm font-light text-neutral-500">
										{user?.email}
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
											Logout
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</>
				) : (
					<Link to={"/login"}>
						<ShinyButton className="cursor-pointer text-white">Login</ShinyButton>
					</Link>
				)}
			</div>
		</nav>
	);
}
