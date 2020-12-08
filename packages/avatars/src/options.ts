/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Seed = string;
export type DataURI = boolean;
export type Radius = number;
export type Width = number;
export type Height = number;
export type Margin = number;
export type BackgroundColor = string | string[];

export interface Options {
  seed?: Seed;
  dataUri?: DataURI;
  radius?: Radius;
  r?: Radius;
  width?: Width;
  w?: Width;
  height?: Height;
  h?: Height;
  margin?: Margin;
  m?: Margin;
  backgroundColor?: BackgroundColor;
  b?: BackgroundColor;
  [k: string]: unknown;
}
