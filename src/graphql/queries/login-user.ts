import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation signIn($input: SignInInput!) {
  signIn(input: $input) {
    token
    	user {
        email
        name
      }
    }
  }
`;
