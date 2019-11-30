import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
      { props.quiz.map((quizItem, index) => {
        const cls = [
          classes[props.results[quizItem.id]]
        ]

        return(
          <li
          key={index}
          className={cls.join(' ')}
          >
            <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
          </li>
        )

      }) }
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <button onClick={props.onRetry}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
