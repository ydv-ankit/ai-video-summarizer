import { MarkdownPreview } from "@/components/md-preview";
import Uploader from "@/components/uploader";
import useAxios from "@/hooks/useAxios";
import { env } from "@/lib/env";
import useAuthStore from "@/store/zustand";
import { useState } from "react";

const Summarizer = () => {
	const { makeAxiosRequest, error, isLoading } = useAxios();
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [data, setData] = useState<any>(null);
	const user = useAuthStore((state) => state.user);

	const handleSummarizeVideo = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!selectedFile) {
			return;
		}
		const formData = new FormData();
		formData.append("file", selectedFile);
		formData.append("token", String(user?.auth));
		const res = await makeAxiosRequest(
			`${env.SERVER_URL}/summarize`,
			"POST",
			{
				"Content-Type": "multipart/form-data",
			},
			formData
		);
		if (!res) return;
		console.log(res.data);
		setData(res.data.data);
	};

	if (!user) {
		return (
			<div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
				<div className="text-white text-2xl">Please log in to access this page.</div>
			</div>
		);
	}

	return (
		<div>
			{data ? (
				<div>
					<MarkdownPreview content={data} />
				</div>
			) : (
				<Uploader
					selectedFile={selectedFile}
					setSelectedFile={setSelectedFile}
					handleSummarizeVideo={handleSummarizeVideo}
					error={error}
					isLoading={isLoading}
				/>
			)}
		</div>
	);
};

export default Summarizer;
