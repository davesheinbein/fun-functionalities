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

import LinkedinOptions from '../components/Chatbot/LinkedinOptions/LinkedinOptions';
import DavidSLinkedin from '../components/Chatbot/LinkedinOptions/LinkedinCard/DavidSLinkedin/DavidSLinkedin';
import JasonHLinkedin from '../components/Chatbot/LinkedinOptions/LinkedinCard/JasonHLinkedin/JasonHLinkedin';

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
						information: `Hello, this Fun Functionalities explores various different functionalities, packages, and different use cases of the React-Spring and Framer libraries.`,
						result:
							'Depending on your websites needs each of these functionalities can be applied to improve user experience and interaction with any website.',
						id: 1,
					},
					{
						information: `A Users experience are important because they attempt to anticipate and fulfill a users needs.`,
						result: `It's purpose is to keep that use loyal to your product or brand.`,
						id: 2,
					},
					{
						information: `A Users interactions are important because it can make or break your customer ase`,
						result: `It's purpose is to create fewer problems increases user involvement, perfects functionality and creates a strong link between your customers and your website.`,
						id: 3,
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
		{
			widgetName: 'linkedinOptions',
			widgetFunc: (props) => <LinkedinOptions {...props} />,
			delay: 500,
		},
		{
			widgetName: 'davidSLinkedin',
			widgetFunc: (props) => <DavidSLinkedin {...props} />,
			delay: 500,
		},
		{
			widgetName: 'jasonHLinkedin',
			widgetFunc: (props) => <JasonHLinkedin {...props} />,
			delay: 500,
		},
	],
};

export default config;
