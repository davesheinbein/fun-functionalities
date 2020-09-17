class MessageParser {
	constructor(actionProvider) {
		this.actionProvider = actionProvider;
	}

	parse(message) {
		console.log(message);
		const lowercase = message.toLowerCase();
		const uppercase = message.toUpperCase();

		// Greet
		if (
			uppercase.includes('hello') ||
			uppercase.includes('hi') ||
			uppercase.includes('hey') ||
			lowercase.includes('hello') ||
			lowercase.includes('hi') ||
			lowercase.includes('hey')
		) {
			this.actionProvider.greet();
		}

		// Options
		if (
			uppercase.includes('option') ||
			lowercase.includes('option') ||
			uppercase.includes('options') ||
			lowercase.includes('options')
		) {
			this.actionProvider.mainOptions();
		}

		// Robot
		if (
			uppercase.includes('bot') ||
			lowercase.includes('bot') ||
			uppercase.includes('robot') ||
			lowercase.includes('robot')
		) {
			this.actionProvider.robot();
		}

		// How Are You
		if (
			uppercase.includes(`what's up`) ||
			lowercase.includes(`what's up`) ||
			uppercase.includes(`what's up`) ||
			lowercase.includes(`what's up`) ||
			uppercase.includes('how are you') ||
			lowercase.includes('how are you') ||
			uppercase.includes(`how's it going are you`) ||
			lowercase.includes(`how's it going are you`)
		) {
			this.actionProvider.howAreYou();
		}

		// Joke
		if (
			uppercase.includes(`joke`) ||
			lowercase.includes(`joke`) ||
			uppercase.includes(`funny`) ||
			lowercase.includes(`funny`)
		) {
			this.actionProvider.funny();
		}

		// Hahahahaha
		if (
			uppercase.includes(`haha`) ||
			lowercase.includes(`haha`) ||
			uppercase.includes(`lol`) ||
			lowercase.includes(`lol`)
		) {
			this.actionProvider.haha();
		}

		// friends
		if (
			uppercase.includes(`friend`) ||
			lowercase.includes(`friend`)
		) {
			this.actionProvider.friends();
		}

		// Information
		if (
			uppercase.includes('information') ||
			uppercase.includes('info') ||
			lowercase.includes('information') ||
			lowercase.includes('info')
		) {
			this.actionProvider.handleinfoBox();
		}

		// Github
		if (
			uppercase.includes('github') ||
			uppercase.includes('git') ||
			lowercase.includes('github') ||
			lowercase.includes('git')
		) {
			this.actionProvider.githubOptions();
		}

		// Portfolio
		if (
			uppercase.includes('port') ||
			lowercase.includes('port') ||
			uppercase.includes('portfolio') ||
			lowercase.includes('portfolio') ||
			uppercase.includes('Portfolios') ||
			lowercase.includes('Portfolios') ||
			uppercase.includes('Portfolio') ||
			lowercase.includes('Portfolio')
		) {
			this.actionProvider.portfolioOptions();
		}
	}
}

export default MessageParser;
