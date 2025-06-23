/**
	* Fetch a method on the Last.fm API
	* @param {string} user - Required, Username to use for method
	* @param {string} key - Required, Last.fm API key
	* @param {string} method - Required, Method to fetch on the API
	* @param {string} optional - Optional, other options to add on for specific methods
	* @param {string} format - Optional, Format of data; Default is JSON
	*/
export async function fetch_api(user, key, method, optional = "", format = "json") {
	return fetch(
		`http://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${key}&format=${format}${optional}`
	).then((res) => res.json())
	.then((res_json) => {return res_json});
}
