import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { FIND_ALL, FIND_BY_NAME } from "../graphql/queries"
import { ADD_PERSON } from "../graphql/mutations"

export const usePersons = () => {
    const result = useQuery(FIND_ALL)
    return result
}

export const usePerson = () => {
    const result = useLazyQuery(FIND_BY_NAME)
    return result
}

export const useAddPerson = () => {
    const result = useMutation(
        ADD_PERSON,
        { refetchQueries: [{ query: FIND_ALL }] }
    )
    return result
}