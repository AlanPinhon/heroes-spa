import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () =>  mockedUseNavigate
}));

describe('Pruebas en <SearchPage/>', () => {

  beforeEach( () => jest.clearAllMocks() );

  test('debe de mostrarse correctamente con valores por defecto', () => {

    const { container } = render (
      <MemoryRouter>
        <SearchPage/>
      </MemoryRouter>
    );

    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar a Batman y su valor en el input', () => {

    render (
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage/>
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');

    const img = screen.getByRole('img');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

    const searchHeroAlert = screen.getByLabelText('search_hero');
    expect(searchHeroAlert.style.display).toBe('none');

    const noFoundHeroAlert = screen.getByLabelText('no_found_hero');
    expect(noFoundHeroAlert.style.display).toBe('none');

  });

  test('debe mostrar el error si el héroe no existe (batman123)', () => {
    
    render (
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage/>
      </MemoryRouter>
    );

    const noFoundHeroAlert = screen.getByLabelText('no_found_hero');
    expect(noFoundHeroAlert.className).toContain('alert-danger');

  });

  test('debe de llamar el navigate a la pantalla nueva', () => {

    render (
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage/>
      </MemoryRouter>
    );

    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}});
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");

    // screen.debug();

  });

})