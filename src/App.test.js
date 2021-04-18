import * as React from 'react'
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render, screen } from '@testing-library/react';
import App from './App';


configure({ adapter: new Adapter() });

test('renders Sorted Cats', () => {
  mount(<App />);    
  
  setTimeout ( () => {
    const linkElement1 = screen.getByText("Sorted Cats");
    expect(linkElement1).toBeInTheDocument();

  }, 2000)
});



