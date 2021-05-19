import React from 'react'
import {AnswerObject} from '../App'
import {Wrapper , ButtonWrapper} from './QuestionCard.styles'


type Props = {
    question : string ;
    answers : string[];
    callback : (e : React.MouseEvent<HTMLButtonElement>) => void ;
    userAnswer : AnswerObject | undefined ;
    questionNr : number ;
    totalQuestions : number
}

const QuestionCard: React.FC<Props> = ({question , answers ,callback , userAnswer ,questionNr , totalQuestions}) => {
    return (
        <Wrapper className="animate__animated animate__zoomInDown">
            <p className='number'>{questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html : question}}/>
            {answers.map(answer => {
                return <ButtonWrapper
                       key ={answer}
                       correct={userAnswer?.correctAnswer ==answer}
                       userClicked={userAnswer?.answer ==answer}>
                         <button disabled={!!userAnswer} value={answer} onClick={callback}>
                             <span dangerouslySetInnerHTML={{__html : answer}}/>
                         </button>
                       </ButtonWrapper>
            })}
        </Wrapper>
    )
}

export default QuestionCard
