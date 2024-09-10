import Greet from "./greet"
import {render,screen} from "@testing-library/react"


test('Greet renders correctly',()=>{ //name of the test-Greet renders correctly
    render(<Greet/>)
    const textElement=screen.getByText(/Hello/i)
    expect(textElement).toBeInTheDocument() //method in the jest expect
    //above line will be jest assertion  // above toBeInTheDocument is virtual dom
})

test('Greet renders with a name', () => {
    render(<Greet name="Manjunath" />);
    const textElement = screen.getByText(/Hello, developmentManjunath/i);
    expect(textElement).toBeInTheDocument();
  });
  