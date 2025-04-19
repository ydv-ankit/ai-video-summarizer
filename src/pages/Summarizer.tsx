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
