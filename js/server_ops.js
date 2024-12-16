export const getPosts = async (url, method = 'GET', headers = {}) => {
	return await fetch(url, options(method))
		.then(res => res.json())
		.catch(err => console.error(err))
}

const options = (method) => {
	return ({
		method:method,
		header:myHeaders
	})
};

const myHeaders = new Headers({"Content-Type":"application/json"});