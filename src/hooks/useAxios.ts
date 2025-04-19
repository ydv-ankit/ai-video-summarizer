import axios, { Method } from "axios";
import { useState } from "react";

const useAxios = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const makeAxiosRequest = async (
		url: string,
		method: Method,
		headers?: {
			[key: string]: any;
		},
		payload?: any
	) => {
		try {
			setIsLoading(true);
			setError(null);
			const response = await axios({
				url,
				method,
				headers,
				data: payload,
				withCredentials: true,
			});

			return response;
		} catch (error: any) {
			console.log(error);
			setError(
				error.response.data.msg
					? error.response.data.msg
					: "Something went wrong. Please try again."
			);
		} finally {
			setIsLoading(false);
		}
	};
	return {
		isLoading,
		error,
		makeAxiosRequest,
	};
};

export default useAxios;
