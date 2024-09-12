import ById from '../GetElement/getByRole';
import { screen,render } from '@testing-library/react';

test('should be render the componenets', () => {
    render(<ById />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2); // Because there are two buttons in the component
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();

    const inputElement = screen.getByLabelText('Name:');
    expect(inputElement).toBeInTheDocument();
})



//token in antd
