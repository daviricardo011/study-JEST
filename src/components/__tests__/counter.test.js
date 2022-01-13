import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Counter from '../counter'

describe('Counter Component', () => {
    test('Should start with the value 0', () => {
        render(<Counter />)

        const counterTitle = screen.getByText('0') // tenta procurar o texto e retorna o elemento. Se não achar, lança um erro
        // const counterTitle = screen.queryByText('0') // faz a mesma coisa, mas tem um retorno null. Não quebra.
        // const counterTitle = screen.findByText('0') //retorna uma promise, caso encontre, ele retorna
        expect(counterTitle).toBeInTheDocument()
    })

    test('Should contain the class counter__title in the title', () => {
        render(<Counter />)

        const counterTitle = screen.getByText('0')
        expect(counterTitle).toHaveClass('counter__title') // verifica se tem a classe counter__title
    })

    test('Should not contain the class counter__title--increment or counter__title--decrement in the title', () => {
        render(<Counter />)

        const counterTitle = screen.getByText('0')
        expect(counterTitle).not.toHaveClass('counter__title--increment')
        expect(counterTitle).not.toHaveClass('counter__title--decrement')
    })

    test('Should countain a button with the text "Incrementar"', () => {
        render(<Counter />)

        //o getByRole, Se encontrar mais de um Role button, retorna um erro. Se colocar as duas propriedades ele procura o texto e o Role.
        //Foi usada uma expressão regular para não diferenciar letras maiusculas de minusculas
        const buttonIncrement = screen.getByRole('button', { name: /incrementar/i })
        expect(buttonIncrement).toBeInTheDocument()
    })

    test('Should have "button" and "button--increment" classes', () => {
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', { name: /incrementar/i })
        expect(buttonIncrement).toHaveClass('button')
        expect(buttonIncrement).toHaveClass('button--increment')
    })

    test('Should countain a button with the text "Decrementar"', () => {
        render(<Counter />)

        //o getByRole, Se encontrar mais de um Role button, retorna um erro. Se colocar as duas propriedades ele procura o texto e o Role.
        //Foi usada uma expressão regular para não diferenciar letras maiusculas de minusculas
        const buttonIncrement = screen.getByRole('button', { name: /decrementar/i })
        expect(buttonIncrement).toBeInTheDocument()
    })

    test('Should have "button" and "button--decrement" classes', () => {
        render(<Counter />)

        const buttonDecrement = screen.getByRole('button', { name: /decrementar/i })
        expect(buttonDecrement).toHaveClass('button')
        expect(buttonDecrement).toHaveClass('button--decrement')
    })

    // test('Should add one more by clicking on the button', () => {
    //     render(<Counter />)

    //     const buttonIncrement = screen.getByRole('button', { name: /incrementar/i })
    //     expect(buttonDecrement).toHaveClass('button')
    //     expect(buttonDecrement).toHaveClass('button--increment')
    // })
})