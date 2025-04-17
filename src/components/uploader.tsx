import { Button } from "@/components/ui/button";
import { LucideFileInput } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Uploader = ({
	selectedFile,
	setSelectedFile,
	handleSummarizeVideo,
	error,
	isLoading,
}: {
	selectedFile: File | null;
	setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
	handleSummarizeVideo: (e: React.FormEvent) => Promise<void>;
	error: string | null;
	isLoading: boolean;
}) => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles);
		setSelectedFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-50 to-white px-4 py-10">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6 transition-all">
				<div
					{...getRootProps()}
					className="border-2 border-dashed border-cyan-400 bg-cyan-100/40 rounded-xl min-h-[160px] flex items-center justify-center cursor-pointer hover:bg-cyan-200/60 transition-colors duration-300">
					<input {...getInputProps()} />
					{isDragActive ? (
						<p className="text-cyan-800 font-medium">Drop the files here ...</p>
					) : (
						<div className="flex flex-col items-center text-center space-y-2">
							<p className="text-sm text-cyan-900">Drag and drop files here, or click to select</p>
							<LucideFileInput className="text-cyan-600" />
						</div>
					)}
				</div>

				{selectedFile && (
					<div className="mt-4">
						<p className="text-sm text-cyan-900 font-medium">Selected File:</p>
						<p className="text-sm text-cyan-800">{selectedFile.name}</p>
					</div>
				)}
				{error && (
					<div className="mt-4">
						<p className="text-sm text-red-600 font-medium">Error: {error}</p>
					</div>
				)}
				{isLoading ? (
					<Button
						className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg py-2 text-sm transition-colors duration-300 cursor-progress"
						disabled>
						Summarizing, Be patient...
					</Button>
				) : (
					<Button
						className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg py-2 text-sm transition-colors duration-300"
						onClick={handleSummarizeVideo}>
						Summarize
					</Button>
				)}
			</div>
		</div>
	);
};

export default Uploader;
