const HEAD = (
    <div
    style={{
        width: '25px',
        height: '25px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: '24px',
        right: '-19.5px'
    }}
    />
);

const BODY = (
    <div
    style={{
        width: '10px',
        height: '50px',
        background: 'black',
        position: 'absolute',
        top: '60px',
        right: 0,
    }}
    />
);

const RIGHT_ARM = (
    <div
    style={{
        width: '50px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '80px',
        right: '-50px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }}
    />
);

const LEFT_ARM = (
    <div
    style={{
        width: '50px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '80px',
        right: '10px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }}
    />
);

const RIGHT_LEG = (
    <div
    style={{
        width: '50px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '100px',
        right: '-40px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }}
    />
);

const LEFT_LEG = (
    <div
    style={{
        width: '50px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '100px',
        right: '0px',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }}
    />
);

type HangmanDrawingProps = {
    numberOfGuesses: number
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    return (
        <div style={{position: 'relative'}}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{height: '25px', width: '10px', background: 'black', marginLeft: '57.5px', position: 'absolute', top: 0, right: 0}}/>
            <div style={{height: '10px', width: '100px', background: 'black', marginLeft: '57.5px'}}/>
            <div style={{height: '200px', width: '10px', background: 'black', marginLeft: '57.5px'}}/>
            <div style={{height: '10px', width: '125px', background: 'black'}}/>
        </div>
    )
}

export default HangmanDrawing