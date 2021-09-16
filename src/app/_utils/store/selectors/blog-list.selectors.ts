import { createSelector } from '@ngrx/store';
import { IBlogStateDataList } from '../state/blog.state';
import { listSelector } from './feature.selectors';

const _getLoadingPosts = (state: IBlogStateDataList) => state && state.loading;
const _getUser = (state: IBlogStateDataList) => state && state.user;
const _getPosts = (state: IBlogStateDataList) => state && state.posts;
const _getPostsNumber = (state: IBlogStateDataList) => state && state.posts && state.posts.length;
const _getPostsUniqueUsers = ({ posts }: IBlogStateDataList) => {
  if (!posts)
    return 0;
  let uniqueUser = [];
  posts.forEach(post => {
    if (!uniqueUser.includes(post.user.id))
      uniqueUser.push(post.user.id)
  });
  return uniqueUser.length;
}

export const getLoadingPosts = createSelector(listSelector, _getLoadingPosts);
export const getPosts = createSelector(listSelector, _getPosts);
export const getPostsNumber = createSelector(listSelector, _getPostsNumber);
export const getPostsUniqueUsers = createSelector(listSelector, _getPostsUniqueUsers);
export const getUser = createSelector(listSelector, _getUser);
