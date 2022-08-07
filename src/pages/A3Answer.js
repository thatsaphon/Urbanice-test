import React, { useEffect, useState } from "react"

function A3Answer() {
  const [result, setResult] = useState({ x: NaN, y: NaN, z: NaN })
  const [input, setInput] = useState({ a: 5, b: 9, c: 15, d: 23 })
  const findResult = ({ a = 0, b = 0, c = 0, d = 0 }) => {
    const v1 = b - a
    const v2 = c - b
    const v3 = d - c

    const a1 = +v2 - +v1
    const a2 = +v3 - +v2

    if (typeof a1 !== "number") return { x: NaN, y: NaN, z: NaN }
    if (typeof a2 !== "number") return { x: NaN, y: NaN, z: NaN }
    if (a1 !== a2) return { x: NaN, y: NaN, z: NaN }
    const result = {
      x: a - (v1 - a1),
      y: d + (v3 + a1),
      z: d + (v3 + a1) + (v3 + a1 + a1),
    }
    return result
  }

  const handleChange = (changeObject) => {
    const tempInput = { ...input, ...changeObject }
    setResult(findResult(tempInput))
    setInput(tempInput)
  }

  useEffect(() => {
    handleChange(input)
  }, [])

  return (
    <div className="p-5">
      <div>
        <p>Fill the blank numbers</p>
        <p>
          X ,{" "}
          <input
            type="number"
            className="w-7 border-2 border-black border-solid rounded-md"
            onChange={(e) => handleChange({ a: +e.target.value })}
            defaultValue={input.a}
          />
          {" , "}
          <input
            type="number"
            className="w-7 border-2 border-black border-solid rounded-md"
            onChange={(e) => handleChange({ b: +e.target.value })}
            defaultValue={input.b}
          />
          {" , "}
          <input
            type="number"
            className="w-7 border-2 border-black border-solid rounded-md"
            onChange={(e) => handleChange({ c: +e.target.value })}
            defaultValue={input.c}
          />
          {" , "}
          <input
            type="number"
            className="w-7 border-2 border-black border-solid rounded-md"
            onChange={(e) => handleChange({ d: +e.target.value })}
            defaultValue={input.d}
          />{" "}
          , Y , Z
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          example. X, 5, 9, 15, 23, Y, Z{" "}
        </p>
      </div>
      <div className="mt-5">
        <p>Result</p>
        <p>X: {result.x}</p>
        <p>Y: {result.y}</p>
        <p>Z: {result.z}</p>
      </div>
      {!result.x ? (
        <p className="text-red-500">Wrong Pattern or Format</p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default A3Answer
