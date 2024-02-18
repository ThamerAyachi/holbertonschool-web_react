// NotificationItem.js
import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type = "default", html, value }) => {
	return (
		// <li data-priority={type}>
		// 	{html ? <div dangerouslySetInnerHTML={html} /> : <span>{value}</span>}
		// </li>
		<>
			{html ? (
				<li data-priority={type} dangerouslySetInnerHTML={html}></li>
			) : (
				<li data-priority={type}>
					<span>{value}</span>
				</li>
			)}
		</>
	);
};

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	html: PropTypes.shape({
		__html: PropTypes.string.isRequired,
	}),
	value: PropTypes.string,
};

export default NotificationItem;
