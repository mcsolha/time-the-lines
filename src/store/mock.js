import posts from './posts.json';
import PostModel from '../js/models/PostModel';

export default posts.map((post) => new PostModel(post));
