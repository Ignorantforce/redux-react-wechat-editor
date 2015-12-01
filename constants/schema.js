import { Schema} from 'normalizr';
const article = new Schema('article', {idAttribute: '_id'});
export const articleSchema = article;