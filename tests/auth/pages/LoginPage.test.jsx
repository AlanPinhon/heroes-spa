import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { LoginPage } from '../../../src/auth/pages/LoginPage';

//Test realizado como práctica fuera del curso

const loginMock = jest.fn();

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}))

describe('Pruebas en <LoginPage/>', () => {

  const contextValue = {
    logged: false,
    login: loginMock
  }
  
  test('debe de llamar al login y el navigate al hacer click', () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const loginBtn = screen.getByRole('button');
    fireEvent.click(loginBtn);

    expect(loginMock).toHaveBeenCalledWith("Alan Piñón");
    expect(mockUseNavigate).toHaveBeenCalledWith("/", {"replace": true});

  });

  test('debe de mostrar si el localStorage fue llamado', () => {

    Storage.prototype.getItem = jest.fn();

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const loginBtn = screen.getByRole('button');
    fireEvent.click(loginBtn);
    
    expect(localStorage.getItem).toHaveBeenCalledWith("lastPath");

  })

})