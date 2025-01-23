import Left from './Left.tsx'
import Right from './Right.tsx'

function getValue(): string{
    return 'Hello'
}

function Head() {
    return (
        <div>
            <Left />
            <div>
                <h1>Fifty Pix! count is {getValue()}</h1>
            </div>
            <Right />
        </div>
    );
}

export default Head;