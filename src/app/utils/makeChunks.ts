export default function makeChunks<T>(arr: T[], len: number) {
  const chunks = [] as T[][]
  let i = 0
  const n = arr.length
  while (i < n) {
    chunks.push(arr.slice(i, i += len))
  }
  return chunks
}
