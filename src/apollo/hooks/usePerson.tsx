import { gql, useQuery } from '@apollo/client'

const GET_PERSON = gql`
query GetPerson($index:Int) {
  allPeople {
    people(nth:$index) {
      name
      height
      eyeColor
      gender
    }
  }
}
`

export const usePerson = (index: number) => {
    const { data, error, loading } = useQuery(GET_PERSON, {
        variables: {
            index: index
        }
    })
    return { data, error, loading }
}