import { render, fireEvent } from '@testing-library/react';
import { LoginButton } from '../components/LoginButton'; // ajuste o caminho conforme necessário

describe('LoginButton', () => {
    it('onClick function in LoginButton', () => {

        const handleClick = jest.fn();

        const { getByText } = render(<LoginButton onClick={handleClick} />);

        const button = getByText('Entrar');

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});