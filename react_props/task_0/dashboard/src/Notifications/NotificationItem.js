// NotificationItem.js
import React from "react";

const NotificationItem = ({ type, html, value }) => {
	return (
		<li data-priority={type}>
			{html ? <div dangerouslySetInnerHTML={html} /> : <span>{value}</span>}
		</li>
	);
};

export default NotificationItem;
