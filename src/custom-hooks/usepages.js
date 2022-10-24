import { getPages } from '../contentful'
import { useEffect, useState } from 'react'

const promise = getPages()

export default function usePages() {

  const [page, setPages] = useState(null)

  useEffect(() => {
    promise.then(result => {
      setPages(result[0].fields)
    })
  }, [])

  return [page]
}