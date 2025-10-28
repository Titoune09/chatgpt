declare module 'three/src/textures/ExternalTexture.js' {
  import { Texture } from 'three';
  export class ExternalTexture extends Texture {
    sourceTexture: WebGLTexture | null;
    readonly isExternalTexture: true;
    constructor(sourceTexture?: WebGLTexture | null);
  }
}
