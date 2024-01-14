// Notifications.js
import React from "react";
import "./Notifications.css";
import closeIcon from "../close-icon.png";
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer }) => {
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
					<NotificationItem
						type="default"
						value="New course available"
					></NotificationItem>
					<NotificationItem
						type="urgent"
						value="New resume available"
					></NotificationItem>
					<NotificationItem
						type="urgent"
						html={{ __html: getLatestNotification() }}
					/>
				</ul>
			</div>
		</div>
	);
};

export default Notifications;
