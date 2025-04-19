import { useState } from "react";
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
import { Menu, X } from "lucide-react";

export function Navbar() {
	const { user, removeUser } = useAuthStore((state) => state);
	const handleLogout = async () => {
		removeUser();
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="relative w-full flex flex-col md:flex-row md:items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white shadow-md">
			<div className="flex items-center justify-between w-full md:w-auto">
				<div className="flex items-center gap-2">
					<img src="icon.ico" alt="logo" className="w-10 h-10" />
					<span className="font-semibold text-xl">QuickVideo</span>
				</div>
				<button className="md:hidden text-white" onClick={() => setIsMenuOpen((prev) => !prev)}>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<div
				className={`${
					isMenuOpen ? "flex" : "hidden"
				} flex-col md:flex md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0`}
				onClick={() => setIsMenuOpen(false)}>
				<Link to={"/"}>
					<div className="text-lg cursor-pointer hover:underline rounded-md p-1 mx-2">Home</div>
				</Link>
				<Link to={"/summarize"}>
					<div className="text-lg cursor-pointer hover:underline rounded-md p-1">Summarize</div>
				</Link>
				{user ? (
					<>
						<div className="flex items-center border rounded-md p-1 gap-1">
							<span className="text-neutral-300 text-sm">{user.tokens}</span>
							<img src="coin.png" alt="token" className="w-4 h-4" />
						</div>
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
