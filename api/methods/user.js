import { fetch_api } from '../utils.js';

class user {
	/**
		* Create a user object
		* @param {string} key - Last.fm API key
		* @param {string} user - Default username to use for data collection
		*/
	constructor(key, user) {
		this.key = key;
		this.user = user;
	}

	/**
		* Parses 'options' object then converts it to a string to pass to 'fetch_api'
		* @param {Object} options - Required, refer to Last.fm docs for valid options
		* @return {string} string that can be added into a fetch url for the API
		*/
	_parse_options(options) {
		if(options === undefined) return '';

		var options_str = '';
		Object.keys(options).forEach((option) => {
			if(options[option] !== undefined) options_str += `&${option.replace('_', '')}=${options[option]}`;
		});
		return options_str;
	}

	/**
		* Get a list of the user's friends on Last.fm
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_friends(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getFriends",
			this._parse_options(options));
	}

	/**
		* Get information about a user profile.
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_info(user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getInfo");
	}

	/**
		* Get the last 50 tracks loved by a user.
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_loved_tracks(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getLovedTracks",
			this._parse_options(options));
	}

	/**
		* Get the user's personal tags
		* @param {Object} options - Required, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_personal_tags(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getPersonalTags",
			this._parse_options(options));
	}

	/**
		* Get a list of the recent tracks listened to by this user.
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_recent_tracks(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getRecentTracks",
			this._parse_options(options));
	}

	/**
		* Get the top albums listened to by a user.
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_top_albums(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getTopAlbums",
			this._parse_options(options));
	}

	/**
		* Get the top artists listened to by a user.
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_top_artists(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getTopArtist",
			this._parse_options(options));
	}

	/**
		* Get the top tags used by this user.
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_top_tags(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getTopTags",
			this._parse_options(options));
	}

	/**
		* Get the top tracks listened to by a user.
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_top_tracks(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getTopTracks",
			this._parse_options(options));
	}

	/**
		* Get an album chart for a user profile
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_weekly_album_chart(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getWeeklyAlbumChart",
			this._parse_options(options));
	}

	/**
		* Get an artist chart for a user profile
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_weekly_artist_chart(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getWeeklyArtistChart",
			this._parse_options(options));
	}

	/**
		* Get a list of available charts for this user
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_weekly_track_chart(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getWeeklyTrackChart",
			this._parse_options(options));
	}

	/**
		* Get a track chart for a user profile
		* @param {Object} options - Optional, Send optional parameters to 'fetch_api'
		* @param {string} user - Required, The Last.fm username to fetch the friends of.
		* @param {string} api_key - Required, A Last.fm API key
		* @return {Object} API Response
		*/
	async get_weekly_chart_list(options, user = this.user, api_key = this.key) {
		return await fetch_api(
			user,
			api_key,
			"user.getWeeklyChartList",
			this._parse_options(options));
	}
}

export default user;
