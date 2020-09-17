import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import MainOptions from '../components/Chatbot/MainOptions/MainOptions';
import Card from '../components/Chatbot/Card/IncrementCard';

import PortfolioOptions from '../components/Chatbot/PortfolioOptions/PortfolioOptions';
import DavidSPortfolio from '../components/Chatbot/PortfolioOptions/PortfoliosCard/DavidSPortfolio/DavidSPortfolio';
import JasonHPortfolio from '../components/Chatbot/PortfolioOptions/PortfoliosCard/JasonHPortfolio/JasonHPortfolio';

import GithubOptions from '../components/Chatbot/GithubOptions/GithubOptions';
import DavidSGithub from '../components/Chatbot/GithubOptions/GithubCard/DavidSGithub/DavidSGithub';
import JasonHGithub from '../components/Chatbot/GithubOptions/GithubCard/JasonHGithub/JasonHGithub';

import BotAvatar from '../components/Chatbot/Avatars/BotAvatar/BotAvatar';
import UserAvatar from '../components/Chatbot/Avatars/UserAvatar/UserAvatar';

const config = {
	botName: `Robbie Tot`,
	lang: 'no',
	customComponents: {
		// Replaces the default bot avatar
		botAvatar: (props) => <BotAvatar {...props} />,
		userAvatar: (props) => <UserAvatar {...props} />,
	},
	customStyles: {
		botMessageBox: {
			backgroundColor: '#376B7E',
		},
		chatButton: {
			backgroundColor: '#5ccc9d',
		},
	},
	initialMessages: [
		createChatBotMessage(
			`Hello. What can I assist you with?`,
			{
				widget: 'mainOptions',
				delay: 500,
			}
		),
	],
	widgets: [
		{
			widgetName: 'mainOptions',
			widgetFunc: (props) => <MainOptions {...props} />,
		},
		{
			widgetName: 'infoBox',
			widgetFunc: (props) => <Card {...props} />,
			delay: 500,
			props: {
				informations: [
					{
						information: `Hey buddy`,
						result: 'How are you?',
						id: 1,
					},
					{
						information: `I'm good thanks for asking`,
						result: 'Enough chit chat',
						id: 2,
					},
				],
			},
		},
		{
			widgetName: 'portfolioOptions',
			widgetFunc: (props) => (
				<PortfolioOptions {...props} />
			),
			delay: 500,
		},
		{
			widgetName: 'davidSPortfolio',
			widgetFunc: (props) => <DavidSPortfolio {...props} />,
			delay: 500,
		},
		{
			widgetName: 'jasonHPortfolio',
			widgetFunc: (props) => <JasonHPortfolio {...props} />,
			delay: 500,
		},
		{
			widgetName: 'githubOptions',
			widgetFunc: (props) => <GithubOptions {...props} />,
			delay: 500,
		},
		{
			widgetName: 'davidSGithub',
			widgetFunc: (props) => <DavidSGithub {...props} />,
			delay: 500,
		},
		{
			widgetName: 'jasonHGithub',
			widgetFunc: (props) => <JasonHGithub {...props} />,
			delay: 500,
		},
	],
};

export default config;
