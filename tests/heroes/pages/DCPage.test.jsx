import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DCPage } from '../../../src/heroes/pages/DCPage';

describe('Pruebas en DCPage.jsx', () => {

  test('debe de mostrar la página de DC Comics', () => {

    render(
      <MemoryRouter>
        <DCPage/>
      </MemoryRouter>
    );

    expect(screen.getByText('DC Comics')).toBeTruthy();

  })

})