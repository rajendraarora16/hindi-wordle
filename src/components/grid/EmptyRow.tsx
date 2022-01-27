import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(3))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
