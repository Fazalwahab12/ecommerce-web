//skBc1NbQQNRgj9UJFGU6r1qDrHpCgeiWSSOrucZaFB09BNLGmr6dVWHj9ri9VZe3weDXiescaJpBDc6NIlT21SjAZe6e8yrYqbmW6nLLzKn9GKFPPp5BmYrQB7WHzT0ca0j5op4vmjxLlqYV8Jl1hF4qi05vqG5OF5AP6mWtUSpceHtlnx1X
// SANITY-ACCESS-TOKEN=skBc1NbQQNRgj9UJFGU6r1qDrHpCgeiWSSOrucZaFB09BNLGmr6dVWHj9ri9VZe3weDXiescaJpBDc6NIlT21SjAZe6e8yrYqbmW6nLLzKn9GKFPPp5BmYrQB7WHzT0ca0j5op4vmjxLlqYV8Jl1hF4qi05vqG5OF5AP6mWtUSpceHtlnx1X

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-30'
  
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
