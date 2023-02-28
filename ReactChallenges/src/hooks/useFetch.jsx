import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [dataAPI, setDataAPI] = useState({
		data: [],
		isLoading: true,
		hasError: null,
	});

	const doFetch = async () => {
		try {
			setDataAPI({
				data: [],
				isLoading: true,
				hasError: null,
			});
			const resp = await fetch(url);
			const data = await resp.json();
			setDataAPI({ data, isLoading: false, hasError: null });
			return dataAPI;
		} catch (error) {
			setDataAPI({
				data: [],
				isLoading: false,
				hasError: error,
			});
			return dataAPI;
		}
	};

	useEffect(() => {
		doFetch();
	}, [url]);

	return dataAPI;
};
