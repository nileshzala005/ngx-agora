/**
 * The MediaStream interface represents a stream of media content.
 *
 * A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of
 * [MediaStreamTrack](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.mediastreamtrack.html).
 *
 * @see [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) for details.
 */
export interface MediaStream {
  /**
   * A Boolean value that returns true if the stream is active, or false otherwise.
   * @see [active](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/active) for details.
   */
  readonly active: boolean;
  /**
   * A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) containing 36 characters
   * denoting a universally unique identifier (UUID) for the object.
   *
   * @see [MediaStream.id](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/id) for details.
   */
  readonly id: string;
}
