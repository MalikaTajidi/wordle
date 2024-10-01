import React from 'react'

const WordleKeyboard : React.FC = (): JSX.Element => {
    const alphabet: string[] = 'qwertyuiopasdfghjklzxcvbnm'.split("")
    return (
        <div className='keyboardBase'>
            {alphabet.map((letter: string, i: number): JSX.Element => (
                <div className='key' id={letter} key={i}>
                     {letter}
                </div>
            ))}

        </div>
    );

};
export default WordleKeyboard