import userService from '../services/userServices';

export const reducer = (
	state = { user: userService.getUser() },
	action
) => {
	switch (action.type) {
		case 'HANDLELOGOUT':
			try {
				return (
					userService.logout(), (state = { user: null })
				);
			} catch (error) {
				console.log('Error >>>> ' + error);
				console.log('Error.stack >>>> ' + error.stack);
				console.log('Error.type >>>> ' + error.type);
				return 'Error';
			}
		case 'HANDLESIGNUPORLOGIN':
			try {
				return (state = { user: userService.getUser() });
			} catch (error) {
				console.log('Error >>>> ' + error);
				console.log('Error.stack >>>> ' + error.stack);
				console.log('Error.type >>>> ' + error.type);
				return 'Error';
			}
		default:
			return state;
	}
};

export default reducer;
