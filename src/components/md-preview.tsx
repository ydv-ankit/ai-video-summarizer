import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

export function MarkdownPreview({ content }: { content: string }) {
	return (
		<Markdown
			rehypePlugins={[rehypeHighlight]}
			components={{
				h1: ({ node, ...props }) => (
					<h1 {...props} className={cn("text-3xl font-bold mt-6 mb-4")}>
						{props.children}
					</h1>
				),
				h2: ({ node, ...props }) => (
					<h2 {...props} className={cn("text-2xl font-semibold mt-5 mb-3")}>
						{props.children}
					</h2>
				),
				h3: ({ node, ...props }) => (
					<h3 {...props} className={cn("text-xl font-semibold mt-4 mb-2")}>
						{props.children}
					</h3>
				),
				p: ({ node, ...props }) => (
					<p {...props} className={cn("text-base leading-relaxed mb-4")}>
						{props.children}
					</p>
				),
				a: ({ node, ...props }) => (
					<a
						{...props}
						className={cn("text-cyan-600 hover:underline")}
						target="_blank"
						rel="noopener noreferrer">
						{props.children}
					</a>
				),
				ul: ({ node, ...props }) => (
					<ul {...props} className={cn("list-disc pl-6 mb-4")}>
						{props.children}
					</ul>
				),
				ol: ({ node, ...props }) => (
					<ol {...props} className={cn("list-decimal pl-6 mb-4")}>
						{props.children}
					</ol>
				),
				li: ({ node, ...props }) => (
					<li {...props} className={cn("mb-1")}>
						{props.children}
					</li>
				),
				blockquote: ({ node, ...props }) => (
					<blockquote
						{...props}
						className={cn("border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4")}>
						{props.children}
					</blockquote>
				),
				code: ({ node, className, children, ...props }) => {
					return (
						<pre
							className={cn(
								className,
								"bg-gray-900 text-gray-100 text-sm p-4 rounded overflow-x-auto my-4"
							)}>
							<code {...props}>{children}</code>
						</pre>
					);
				},
				hr: () => <hr className="my-6 border-gray-300" />,
				img: ({ node, ...props }) => (
					<img
						{...props}
						className="max-w-full h-auto rounded shadow-md my-4"
						alt={props.alt || ""}
					/>
				),
			}}>
			{content}
		</Markdown>
	);
}
