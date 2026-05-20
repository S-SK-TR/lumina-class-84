import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  it('renders correctly with title and success message', () => {
    render(<App />);

    // Başlık render edildi mi?
    expect(screen.getByText(/Öğrenci Gelişim Takip Sistemi/i)).toBeInTheDocument();

    // Başarılı mesaj render edildi mi?
    expect(screen.getByText(/Uygulama başarıyla oluşturuldu!/i)).toBeInTheDocument();
  });

  it('has correct styling for the container', () => {
    render(<App />);
    const container = screen.getByText(/Öğrenci Gelişim Takip Sistemi/i).parentElement;

    // Container'ın doğru stil özelliklerine sahip olduğunu doğrula
    expect(container).toHaveStyle({
      textAlign: 'center',
      marginTop: '5rem'
    });
  });
});
