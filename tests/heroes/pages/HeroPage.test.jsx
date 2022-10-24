import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroPage } from '../../../src/heroes/pages/HeroPage';

//Test realizado como práctica fuera del curso

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <HeroPage/>', () => { 

  test('Debe de mostrar la página del héroe con base en su id', () => {

    const id = 'marvel-spider';

    render(
      <MemoryRouter initialEntries={[`/hero/${id}`]}>
        <Routes>
          <Route path="/hero/:id" element={
            <HeroPage/>
          }>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Spider Man')).toBeTruthy();

  });

  test('debe de llamar el navigate al hacer click' , () => {

    render(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:id" element={
            <HeroPage/>
          }>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const btnNavigateBack = screen.getByRole('button');
    fireEvent.click(btnNavigateBack);

    expect(mockUseNavigate).toHaveBeenCalledWith(-1);
  })

})