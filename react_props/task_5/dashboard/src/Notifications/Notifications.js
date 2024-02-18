import React from "react";
import "./Notifications.css";
import closeIcon from "../close-icon.png";
// import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer, listNotifications }) => {
	const handleButtonClick = () => {
		console.log("Close button has been clicked");
	};

	return (
		<div className="n">
			<div className="menuItem">
				<p>Your notifications</p>
			</div>
			<div className={`Notifications ${displayDrawer ? "active" : ""}`}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<p>Here is the list of notifications</p>
					<button
						style={{ background: "none", border: "none", cursor: "pointer" }}
						onClick={handleButtonClick}
					>
						<img
							src={closeIcon}
							alt="Close"
							style={{ width: "20px", height: "20px" }}
						/>
					</button>
				</div>

				<ul>
					{listNotifications.length === 0 ? (
						<NotificationItem
							type="default"
							value="No new notification for now"
						/>
					) : (
						listNotifications.map((notification) => (
							<NotificationItem
								key={notification.id}
								notification={notification}
							/>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool.isRequired,
	listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};

Notifications.defaultProps = {
	listNotifications: [],
};

export default Notifications;
