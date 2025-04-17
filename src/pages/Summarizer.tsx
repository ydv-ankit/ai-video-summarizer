import { MarkdownPreview } from "@/components/md-preview";
import Uploader from "@/components/uploader";
import useAxios from "@/hooks/useAxios";
import { env } from "@/lib/env";
import { useState } from "react";

const Summarizer = () => {
	const { makeAxiosRequest, error, isLoading } = useAxios();
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [data, setData] = useState<any>(null);

	const handleSummarizeVideo = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!selectedFile) {
			return;
		}
		const formData = new FormData();
		formData.append("file", selectedFile);
		const data = await makeAxiosRequest(
			`${env.SERVER_URL}/summarize`,
			"POST",
			{
				"Content-Type": "multipart/form-data",
			},
			formData
		);
		console.log(data);
		setData(data.data);
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
