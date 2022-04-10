import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

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

export { renderWithRouter };
