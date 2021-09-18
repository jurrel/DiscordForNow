import { useSelector } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './channels.css';
import VideoModal from '../../videoModal';
import Messages from '../Messages/messages';

const Channels = ({ channels, server, socket }) => {
	const [selectedChannel, setSelectedChannel] = useState(1);

	return (
		<>
			<div className="server_name_header">
				<p>{server.name}</p>
				<div className="server_name_bottom_bar"></div>
			</div>
			{channels?.map((channel) => (
				<div key={channel.id} className="align_the_side_bar_channel">
					<h2 onClick={(e) => setSelectedChannel(channel.id)}>
						{channel.name}
					</h2>
				</div>
			))}
			{selectedChannel && (
				<Messages
					socket={socket}
					channel={channels?.find(
						(channel) => channel.id === Number(selectedChannel)
					)}
					server={server}
				/>
			)}
			{/* <VideoModal serverId={serverId} /> */}
			{/* <div className="user_profile_name">
				<img alt='profile' src={user.profile_picture} className="user_profile_photo" />
				<p>{user.username}</p>
				<div className="settings_icon"></div>
			</div> */}
		</>
	);
};

export default Channels;
