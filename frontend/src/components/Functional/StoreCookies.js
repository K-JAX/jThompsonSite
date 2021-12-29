import { useNavigate } from "react-router";

// Just some javascript functions for manipulating cookies

export const storeVisitedCookie = () => {
	var date = new Date();

	document.cookie =
		"visited=true; SameSite=None; Secure; expires=" +
		date.setDate(date.getDate() + 1);
};

export const getCookie = (name) => {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else {
		begin += 2;
		var end = document.cookie.indexOf(";", begin);
		if (end == -1) {
			end = dc.length;
		}
	}
	// because unescape has been deprecated, replaced with decodeURI
	//return unescape(dc.substring(begin + prefix.length, end));
	return decodeURI(dc.substring(begin + prefix.length, end));
};

export const deleteCookie = (name, path, domain) => {
	if (getCookie(name)) {
		document.cookie =
			name +
			"=" +
			(path ? ";path=" + path : "") +
			(domain ? ";domain=" + domain : "") +
			";expires=Thu, 01 Jan 1970 00:00:01 GMT";
	}
};
