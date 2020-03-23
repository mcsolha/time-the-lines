import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret, faEllipsisH, faThumbsUp, faCommentAlt, faShareAltSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);
library.add(faEllipsisH);
library.add(faThumbsUp);
library.add(faCommentAlt);
library.add(faShareAltSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);
