import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from './AddInput';

const mockedSetTodo = jest.fn();
describe('add input test cases', () => {
	beforeEach(() => {
		render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
	});

	it('render add input correctly', () => {
		const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
		expect(inputElm).toBeInTheDocument();
	});

	it('input value changed correctly', () => {
		const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElm, { target: { value: 'test' } });
		expect(inputElm.value).toBe('test');
	});
	it('input should be empty after click add', () => {
		const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElm, { target: { value: 'test' } });
		fireEvent.click(screen.getByRole('button'));
		expect(inputElm.value).toBe('');
	});
});
