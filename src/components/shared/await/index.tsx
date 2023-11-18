import AwaitSuspense from './await-suspense'
import AwaitVisible from './await-visible'

export default async function Await<T> ({
  promise,
  children
}: {
  promise: Promise<T>
  children: (result: T) => JSX.Element
}) {
  const result = await promise
  return children(result)
}

Await.Suspense = AwaitSuspense
Await.Visible = AwaitVisible
