import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './TodoFooter';

// const ReduxWrapper = ({ children }) => {
//    <Provider store={store}>{children} </Provider>;
//   }
const AppWrapper = ({ children }) => (
	<BrowserRouter>
		{children}
		{/* <ReduxWrapper>{children}</ReduxWrapper> */}
	</BrowserRouter>
);
const renderWithRouter = (ui, { route = '/' } = {}) => {
	window.history.pushState({}, 'Test page', route);
	return render(ui, { wrapper: AppWrapper });
};

describe('test footer component', () => {
	it('render header correctly when have more than 1 task', () => {
		renderWithRouter(<Footer numberOfIncompleteTasks={5} />);
		const paragraphElm = screen.getByText('5 tasks left');
		expect(paragraphElm.textContent).toBe('5 tasks left');
	});

	it('render header correctly when have  1 task', () => {
		renderWithRouter(<Footer numberOfIncompleteTasks={1} />);
		const paragraphElm = screen.getByText('1 task left');
		expect(paragraphElm.textContent).toBe('1 task left');
	});
});

// it('render header correctly when have  1 task', () => {
// 	renderWithRouter(<Footer numberOfIncompleteTasks={1} />);
// 	const paragraphElm = screen.getByText('1 task left');
// 	expect(paragraphElm).toBeTruthy();
// });

// it('render header correctly when have  6 task', () => {
// 	renderWithRouter(<Footer numberOfIncompleteTasks={6} />);
// 	const paragraphElm = screen.getByTestId('footer-para');
// 	expect(paragraphElm).toHaveTextContent('6 tasks left');
// });
