import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => { 

  const initialState = {
    logged: false
  }

  test('debe de retornar el estado por defecto', () => {
    
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);

  });

  test('debe de llamar el login, autenticar y establecer el user', () => {

    const action = {
      type: types.login,
      payload: {id: 'ABC', name: 'Alan Piñón'}
    }

    const newState = authReducer(initialState, action);
    expect(newState).toEqual({
      logged: true,
      user: action.payload
    });

  });

  test('debe de borrar el name del usuario y logged en false', () => {

    const action = {
      type: types.logout,
    }

    const newState = authReducer({
      logged: true,
      user: {id: 'ABC', name: 'Alan Piñón'}
    }, action)

    expect(newState).toEqual( {logged: false} );

  });

});