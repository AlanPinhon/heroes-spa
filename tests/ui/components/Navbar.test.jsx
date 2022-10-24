import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () =>  mockedUseNavigate
}));

describe('Pruebas en <Navbar/>', () => {

  const contextValue = {
    logged: true,
    user: {id: '123', name: 'Alan Pinhon'}
  }

  beforeEach( () => jest.clearAllMocks() );

  test('debe de mostrar el nombre del usuario', () => {

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('Alan Pinhon')).toBeTruthy();
  });

  test('debe de llamar el logout y navigate al hacer click en el botón', () => {

    const logoutMock = jest.fn();

    render(
      <AuthContext.Provider value={{ contextValue, logout: logoutMock }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);

    expect(logoutMock).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true});

  });

})