import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '../../test-utils';
import FollowersList from './FollowersList';

describe('followers', () => {
	beforeEach(() => {
		renderWithRouter(<FollowersList />);
	});
	it('should render at least 1 user', async () => {
		const userElm = await screen.findByTestId('follower-item-0');
		expect(userElm).toBeInTheDocument();
	});
	it('should render  5 users', async () => {
		const userElm = await screen.findAllByTestId(/follower-item/i);
		expect(userElm.length).toBe(5);
	});
});
