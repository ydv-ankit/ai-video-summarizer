import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1>
		<Button>Click me</Button>
	</StrictMode>
);
