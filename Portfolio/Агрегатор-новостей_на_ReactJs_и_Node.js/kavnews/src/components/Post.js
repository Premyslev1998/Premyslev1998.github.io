import React, { PropTypes } from 'react';
import { Item, Icon, Label } from 'semantic-ui-react'; 

const setText = (s) => s.length >= 300 ? s.substr(0, 300) + ' ...' : s;

const Post = ({ title, text, description, image, views }) => {
	
	return(
		<Item>
			<Item.Image src={image}></Item.Image>
			<Item.Content>
				<Item.Header as="a">{title}</Item.Header>
				<Item.Description>{setText(text)}</Item.Description>
				<Item.Extra>
					<Label icon="eye" content={`Просмотров: ${views}`}></Label>
				</Item.Extra>		
			</Item.Content>
		</Item>
	)
}

export default Post;