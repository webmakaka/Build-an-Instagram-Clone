import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation createUsers(
    $userId: String!
    $name: String!
    $username: String
    $email: String!
    $bio: String!
    $website: String!
    $profileImage: String!
    $phoneNumber: String!
  ) {
    insert_users(
      objects: {
        user_id: $userId
        username: $username
        website: $website
        profile_image: $profileImage
        phone_number: $phoneNumber
        name: $name
        email: $email
        bio: $bio
      }
    ) {
      affected_rows
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser(
    $id: uuid!
    $name: String!
    $username: String!
    $website: String!
    $bio: String!
    $email: String!
    $phoneNumber: String!
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: {
        name: $name
        username: $username
        website: $website
        bio: $bio
        email: $email
        phone_number: $phoneNumber
      }
    ) {
      affected_rows
    }
  }
`;

export const EDIT_USER_AVATAR = gql`
  mutation editUserAvatar($id: uuid!, $profileImage: String!) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { profile_image: $profileImage }
    ) {
      affected_rows
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $userId: uuid!
    $media: String!
    $location: String!
    $caption: String!
  ) {
    insert_posts(
      objects: {
        user_id: $userId
        media: $media
        location: $location
        caption: $caption
      }
    ) {
      affected_rows
    }
  }
`;
