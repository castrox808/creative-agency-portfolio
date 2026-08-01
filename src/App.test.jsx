import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('My Simple Portfolio Project Test Suite', function() {
  
  beforeEach(function() {
    
    localStorage.clear();
  });

  test('checks if my app renders the welcome titles and default cards', function() {
    render(<App />);
    
    
    expect(screen.getByText('MY ASSIGNMENT APP')).toBeInTheDocument();
    expect(screen.getByText('Welcome To My Creative Showcase')).toBeInTheDocument();
    
    
    expect(screen.getByText('My First Shop Website')).toBeInTheDocument();
  });

  test('checks if typing in the search box correctly filters our list', function() {
    render(<App />);
    
    const searchField = screen.getByPlaceholderText('Type text to search...');
    
    // Simulate typing a keyword into our input box component
    fireEvent.change(searchField, { target: { value: 'Logo' } });
    
    // We expect to see the logo pack card but not the shop website card
    expect(screen.getByText('Logo Design Pack')).toBeInTheDocument();
    expect(screen.queryByText('My First Shop Website')).not.toBeInTheDocument();
  });

  test('checks if submitting a blank form triggers basic warning alerts', function() {
    render(<App />);
    
    // Spy on the basic window alert function
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(function() {});
    
    const addButton = screen.getByRole('button', { name: /Add This Card/i });
    
    // Click the form button without typing anything
    fireEvent.click(addButton);
    
    // Confirm our plain alert box function was triggered
    expect(alertSpy).toHaveBeenCalledWith('Please enter a project title');
    alertSpy.mockRestore();
  });
});
