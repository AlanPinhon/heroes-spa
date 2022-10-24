import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en <PrivateRoute />', () => {

  test('debe de mostrar el children si está autenticado', () => {

    const contextValue = {
      logged: true,
      user: {id: 'ABC', name: 'Alan Piñón'}
    }

    render(

      <AuthContext.Provider value={contextValue}>
        <MemoryRouter >
          
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>

        </MemoryRouter>
      </AuthContext.Provider>

    );

    expect(screen.getByText('Ruta Privada')).toBeTruthy();

    // screen.debug();

  });

  test('debe de ir al login si no está autenticado', () => {

    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
       <MemoryRouter initialEntries={['/marvel']}>
          
          <Routes>

            <Route path='marvel' element={
              <PrivateRoute>
                <h1>Página Marvel</h1>
              </PrivateRoute>
            }/>

            <Route path='/login' element={<h1>Ruta Pública</h1>} />

          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta Pública')).toBeTruthy();
    // screen.debug();


  });

  test('debe de mostrar si el localStorage fue llamado', () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {id: 'ABC', name: 'Alan Piñón'}
    }

    render(

      <AuthContext.Provider value={contextValue}>
        <MemoryRouter >
          
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>

        </MemoryRouter>
      </AuthContext.Provider>

    );

    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");

  })


})