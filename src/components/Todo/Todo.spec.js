import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '../../test-utils';
import Todo from './Todo';

const addTask = (tasks) => {
	const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
	const buttonElm = screen.getByRole('button');
	tasks.forEach((element) => {
		fireEvent.change(inputElm, { target: { value: element } });
		fireEvent.click(buttonElm);
	});
};
describe('todo', () => {
	beforeEach(() => {
		renderWithRouter(<Todo />);
	});
	it('should render added todo text correctly', () => {
		addTask(['test']);

		const todoElm = screen.getByTestId('todo-item');
		expect(todoElm.textContent).toBe('test');
	});

	it('should render more than one task', () => {
		addTask(['test1', 'test2', 'test3']);
		const todoElm = screen.getAllByTestId('todo-item');
		expect(todoElm).toHaveLength(3);
	});

	it('should render without completed class by default', () => {
		addTask(['test']);
		const todoElm = screen.getByTestId('todo-item');
		expect(todoElm).not.toHaveClass('todo-item-active');
	});
	it('should render completed task with completed class', () => {
		addTask(['test']);
		const todoElm = screen.getByTestId('todo-item');
		fireEvent.click(todoElm);
		expect(todoElm).toHaveClass('todo-item-active');
	});
});
