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

export const LIKE_POST = gql`
  mutation likePost($postId: uuid!, $userId: uuid!, $profileId: uuid!) {
    insert_likes(objects: { post_id: $postId, user_id: $userId }) {
      affected_rows
    }
    insert_notifications(
      objects: {
        post_id: $postId
        user_id: $userId
        profile_id: $profileId
        type: "like"
      }
    ) {
      affected_rows
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation unlikePost($postId: uuid!, $userId: uuid!, $profileId: uuid!) {
    delete_likes(
      where: { post_id: { _eq: $postId }, user_id: { _eq: $userId } }
    ) {
      affected_rows
    }

    delete_notifications(
      where: {
        post_id: { _eq: $postId }
        user_id: { _eq: $userId }
        profile_id: { _eq: $profileId }
        type: { _eq: "like" }
      }
    ) {
      affected_rows
    }
  }
`;

export const SAVE_POST = gql`
  mutation savePost($postId: uuid!, $userId: uuid!) {
    insert_saved_posts(objects: { post_id: $postId, user_id: $userId }) {
      affected_rows
    }
  }
`;

export const UNSAVE_POST = gql`
  mutation unsavePost($postId: uuid!, $userId: uuid!) {
    delete_saved_posts(
      where: { post_id: { _eq: $postId }, user_id: { _eq: $userId } }
    ) {
      affected_rows
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: uuid!, $userId: uuid!, $content: String!) {
    insert_comments(
      objects: { post_id: $postId, user_id: $userId, content: $content }
    ) {
      affected_rows
    }
  }
`;

export const CHECK_NOTIFICATIONS = gql`
  mutation checkNotifications($userId: uuid!, $lastChecked: String!) {
    update_users(
      where: { id: { _eq: $userId } }
      _set: { last_checked: $lastChecked }
    ) {
      affected_rows
    }
  }
`;
