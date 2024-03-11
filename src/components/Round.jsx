export default function Round ({
  id,
  question,
  answer,
  isMultipleSelected,
  handleSingleSelection,
  handleMultipleSelection,
  activeQuestion,
  multiple
}) {
  return (
    <li
    key={id}
    className="round"
    onClick={
      isMultipleSelected
        ? () => handleMultipleSelection(id)
        : () => handleSingleSelection(id)
    }
  >
    <>
      <p className="question">
        {question} <span className="open-answer">+</span>
      </p>
      <p
        className={`answer ${
          activeQuestion === id || multiple.includes(id)
            ? "show"
            : ""
        }`}
      >
        {answer}
      </p>
    </>
  </li>
  )
}