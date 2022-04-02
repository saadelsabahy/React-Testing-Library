import { render, screen } from '@testing-library/react';
import Header from './Header';

it('render header correctly', () => {
	render(<Header title='MY header' />);
	const headingElm = screen.getByText(/my header/i);
	expect(headingElm).toBeInTheDocument();
});

// it('render header correctly with getByRole', () => {
// 	render(<Header title='MY header' />);
// 	const headingElm = screen.getByRole('heading');
// 	expect(headingElm).toBeInTheDocument();
// });
it('render header correctly with getAllByRole', () => {
	render(<Header title='MY header' />);
	const headingElm = screen.getAllByRole('heading');
	expect(headingElm).toHaveLength(2);
});
// findBY
it('render header correctly with findBy', async () => {
	render(<Header title='MY header' />);
	const headingElm = await screen.findByTestId('header-2');
	expect(headingElm).toBeInTheDocument();
});

// queryBy
it('render header correctly with queryBy', async () => {
	render(<Header title='MY header' />);
	const headingElm = await screen.queryByTestId('header-1');
	expect(headingElm).toBeNull();
});
