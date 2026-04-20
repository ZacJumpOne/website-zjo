import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: [
        'antd',
        '@ant-design/icons',
        '@ant-design/cssinjs',
        '@ant-design/cssinjs-utils',
        '@emotion/hash',
        'rc-util',
        'rc-cascader',
        'rc-checkbox',
        'rc-collapse',
        'rc-dialog',
        'rc-drawer',
        'rc-dropdown',
        'rc-field-form',
        'rc-image',
        'rc-input',
        'rc-input-number',
        'rc-mentions',
        'rc-menu',
        'rc-motion',
        'rc-notification',
        'rc-overflow',
        'rc-pagination',
        'rc-picker',
        'rc-progress',
        'rc-rate',
        'rc-resize-observer',
        'rc-segmented',
        'rc-select',
        'rc-slider',
        'rc-steps',
        'rc-switch',
        'rc-table',
        'rc-tabs',
        'rc-textarea',
        'rc-tooltip',
        'rc-tree',
        'rc-tree-select',
        'rc-upload',
        'rc-virtual-list'
      ]
    }
  }
});
