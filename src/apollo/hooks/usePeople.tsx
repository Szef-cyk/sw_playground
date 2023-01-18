import { useQuery, gql } from '@apollo/client'

const GET_PEOPLE = gql`
query GetPeople {
  allPeople {
    people {
      name
      height
      eyeColor
      gender
    }
  }
}
`

export const usePeople = () => {
  const { data, error, loading } = useQuery(GET_PEOPLE)
  return {
    data,
    error,
    loading
  }
}