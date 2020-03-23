/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */

export default class PostModel {
  get id() {
    return this._id;
  }

  get publishDate() {
    return this._publishDate;
  }

  get midiaSrc() {
    return this._midiaSrc;
  }

  get category() {
    return this._category;
  }

  get textContent() {
    return this._textContent;
  }

  constructor({ id, publishDate, midiaSrc, category, textContent }) {
    this._id = id;
    this._publishDate = publishDate;
    this._midiaSrc = midiaSrc;
    this._category = category;
    this._textContent = textContent;
  }
}
