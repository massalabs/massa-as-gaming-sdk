/* eslint-disable require-jsdoc */
import {JSON} from 'json-as/assembly';

/**
   * Generates an async game event sent out by the sc
   */
@json
export class TwoDimProjectile {
  uuid: string = '';
  x: f32 = 0.0;
  y: f32 = 0.0;
  xx: f32 = 0.0;
  yy: f32 = 0.0;

  public serializeToString(): string {
    const stringified = JSON.stringify<TwoDimProjectile>(this);
    return stringified;
  }

  static parseFromString(data: string): TwoDimProjectile {
    const parsed = JSON.parse<TwoDimProjectile>(data);
    return parsed;
  }
}
