import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { FIND_ALL, FIND_BY_NAME } from "../graphql/queries"
import { ADD_PERSON, UPDATE_NUMBER } from "../graphql/mutations"

export const usePersons = () => {
    const result = useQuery(FIND_ALL)
    return result
}

export const usePerson = () => {
    const result = useLazyQuery(FIND_BY_NAME)
    return result
}

export const useAddPerson = ({ notifyError }) => {
    const result = useMutation(
        ADD_PERSON,
        {
            refetchQueries: [{ query: FIND_ALL }],
            onError: (error) => {
                notifyError(error.graphQLErrors[0].message)
            }
        }
    )
    return result
}

export const useUpdateNumber = () => {
    const result = useMutation(UPDATE_NUMBER)
    return result
}