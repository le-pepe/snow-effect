import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'snow-effect',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'snow-effect',
      proxiesFile: '../snow-effect-vue/lib/components.ts',
    }),
    reactOutputTarget({
      outDir: '../snow-effect-react/lib/components/stencil-generated/',
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
