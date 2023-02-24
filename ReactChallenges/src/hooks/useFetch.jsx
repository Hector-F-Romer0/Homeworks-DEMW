export const useFetch = async (url) => {
	try {
		const resp = await fetch(url);
		const { data } = await resp.json();
		return {
			data,
			isLoading: true,
			hasError: null,
		};
	} catch (error) {
		return {
			data: null,
			isLoading: true,
			hasError: error,
		};
	}
};
