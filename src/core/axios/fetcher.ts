import { githubInstance } from '.'

const fetcher = (url: string) =>
  githubInstance.get(url).then((response) => response.data)

export default fetcher
