import React from "react"

function A3() {
  return (
    <div className="p-5">
      <h1 className="text-xl underline font-bold">Assignment 3</h1>
      <h3 className="text-lg">Question</h3>
      <p>
        X, 5, 9, 15, 23, Y, Z - Create a function for finding X, Y, Z value and
        create a new page for showing results.
      </p>
      <h3>Answer</h3>
      <button
        className="border-2 border-solid border-emerald-600 bg-emerald-300 p-2 rounded-md"
        onClick={() => window.open("/A3/answer")}
      >
        Show Answer
      </button>
    </div>
  )
}

export default A3
