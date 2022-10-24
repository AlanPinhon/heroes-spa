import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MarvelPage } from '../../../src/heroes/pages/MarvelPage';

describe('Pruebas en MarvelPage.jsx', () => {

  test('debe de mostrar la página de Marvel Comics', () => {

    render(
      <MemoryRouter>
        <MarvelPage/>
      </MemoryRouter>
    );

    expect(screen.getByText('Marvel Comics')).toBeTruthy();

  })

})