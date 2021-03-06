import { CodecType } from '../enums/codec-type.enum';
import { MuteState } from '../enums/mute-state.enum';

export interface LocalAudioStats {
  /** Encoding type of the sent audio. */
  CodecType?: CodecType;
  /** Whether the audio is muted or not. */
  MuteState?: MuteState;
  /** Energy level of the captured audio. */
  RecordingLevel?: string;
  /** Sampling rate, in kHz. */
  SamplingRate?: string;
  /** Bitrate of the sent audio, in Kbps. */
  SendBitrate?: string;
  /** Energy level of the sent audio. */
  SendLevel?: string;
}
