/// <reference types="vite/client" />
/// <reference types="@webgpu/types" />

declare global {
  type GPUTexture = import('@webgpu/types').GPUTexture;
}

export {};
