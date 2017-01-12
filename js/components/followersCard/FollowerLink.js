// Dependecies
import React from 'react';

const FollowerLink = (props) => {
	return <li className="list__follower"><a className="follower__link" href={props.link} target="_blank">{props.title}</a></li>
}

export default FollowerLink;