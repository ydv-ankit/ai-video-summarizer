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
import { Button } from "./ui/button";
import useAxios from "@/hooks/useAxios";
import { env } from "@/lib/env";

export function Navbar() {
	const { user, removeUser } = useAuthStore((state) => state);
	const { makeAxiosRequest } = useAxios();
	const handleLogout = async () => {
		makeAxiosRequest(`${env.SERVER_URL}/logout`, "POST");
		removeUser();
	};

	return (
		<nav className="relative w-full flex items-center justify-around p-2 border-b">
			<div className="flex items-center justify-center gap-2">
				<img src="icon.ico" alt="logo" className="w-10 h-10" />
				<span className="font-semibold text-xl">QuickVideo</span>
			</div>
			<div className="flex items-center justify-center space-x-2">
				<Link to={"/"}>
					<div className="text-neutral-500 hover:text-neutral-800">Home</div>
				</Link>
				<Link to={"/summarize"}>
					<div className="text-neutral-500 hover:text-neutral-800">Summarize</div>
				</Link>
				{user ? (
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
				) : (
					<Link to={"/login"}>
						<Button className="cursor-pointer not-hover:border bg-cyan-500 hover:bg-cyan-600">
							Login
						</Button>
					</Link>
				)}
			</div>
		</nav>
	);
}
