// import Greet from "./greet"
// import {render,screen} from "@testing-library/react"



// describe('Greet',()=>{
    

//     test.only for perticular function test
//     test.skip for skip the perticulat test
//     test('renders correctly',()=>{ //name of the test-Greet renders correctly
//         render(<Greet/>)
//         const textElement=screen.getByText(/Hello/i)
//         expect(textElement).toBeInTheDocument() //method in the jest expect
//         above line will be jest assertion  // above toBeInTheDocument is virtual dom
//     })
    
//     test('renders with a name', () => {
//         render(<Greet name=" Manjunath" />)
//         const textElement = screen.getByText(/Hello, development Manjunath/i);
//         expect(textElement).toBeInTheDocument();
//     });
    
// })


// describe.only('demo code',()=>{

//     test('demo code to description',()=>{
//         render(<Greet />)
//         const textElement=screen.getByText(/Hello, development/i)
//         expect(textElement).toBeInTheDocument();
//     })
// })



import Greet from "./greet"
import {render,screen} from "@testing-library/react"

describe('Greet',()=>{
    

    //test.only for perticular function test
    //test.skip for skip the perticulat test
    test('renders correctly',()=>{ //name of the test-Greet renders correctly
        render(<Greet/>)
        const textElement=screen.getByText(/Hello/i)
        expect(textElement).toBeInTheDocument() //method in the jest expect
        //above line will be jest assertion  // above toBeInTheDocument is virtual dom
    })
})
    

// how to share the data 
// where to use State
// how to reducs api call