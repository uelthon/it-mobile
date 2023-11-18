import React from 'react'

interface Options {
  threshold?: number
  root?: any
  rootMargin?: string
}

export function useIntersectionObserver<T extends Element> (options: Options) {
  const { threshold = 1, root = null, rootMargin = '0%' } = options
  const ref = React.useRef<T>(null)
  const [entry, setEntry] = React.useState < IntersectionObserverEntry | null >(null)

  React.useEffect(() => {
    const node = ref?.current

    if (!node || typeof IntersectionObserver !== 'function') {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
      },
      { threshold, root, rootMargin }
    )

    observer.observe(node)

    return () => {
      setEntry(null)
      observer.disconnect()
    }
  }, [threshold, root, rootMargin])

  return { ref, entry }
}
