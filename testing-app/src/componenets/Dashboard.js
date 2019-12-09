import React from 'react';

const Dashboard = props => {
    const PitchHit = () => {
        props.setPitch({
            ball: 0,
            strike: 0,
            foul: 0,
            innings: 1,
            outs: 0
            
        })
    }

    const PitchStrike = () => {
        if (props.value.strike < 2) {
            props.setPitch({
                ...props.value,
                strike: props.value.strike +1
            }) 
        } else if (props.value.strike <= 3) {
            props.setPitch({
                ...props.value,
                outs: props.value.outs +1
            })
        } else if (props.value.outs < 2) {
            props.setPitch({
                ...props.value,
                innings: props.value.innings +1
            })
        } else {
            props.setPitch({
                ball: 0,
                strike: 0,
                foul: 0
            })
        }
    }

    const PitchBall = () => {
        if (props.value.ball < 3) {
            props.setPitch({
                ...props.value,
                ball: props.value.ball +1
            })
        } else {
            props.setPitch({
                ball: 0,
                strike: 0,
                foul: 0
            })
        }
    }

    const PitchFoul = () => {
        if (props.value.strike < 2) {
            props.setPitch({
                ...props.value,
                strike: props.value.strike +1
            })
        }
    }

    

    return (
        <div>
            <button className='strikeBtn' onClick={PitchStrike}>Strike</button>
            <button className='ballBtn' onClick={PitchBall}>Ball</button>
            <button className='foulBtn' onClick={PitchFoul}>Foul</button>
            <button className='hitBtn' onClick={PitchHit}>Hit</button>
        </div>
    )
}

export default Dashboard;