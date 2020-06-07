import { utils } from '@avatars/core';
import type Options from '../options';
import * as color from '../utils/color';
import * as mask from '../utils/mask';

export default (prng: utils.prng.IPrng, options: Options) => {
  return `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M159 32.0517C159 45.8588 146.912 57.0517 132 57.0517C117.088 57.0517 105 45.8588 105 32.0517C105 31.0365 105.065 30.0353 105.192 29.0517H104C64.2355 29.0517 32 61.2873 32 101.052V110H232V101.052C232 61.2872 199.764 29.0517 160 29.0517L158.808 29.0517C158.935 30.0353 159 31.0365 159 32.0517Z" fill="#E6E6E6"/>
    <mask id="${mask.next()}" mask-type="alpha" maskUnits="userSpaceOnUse" x="32" y="29" width="200" height="81">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M159 32.0517C159 45.8588 146.912 57.0517 132 57.0517C117.088 57.0517 105 45.8588 105 32.0517C105 31.0365 105.065 30.0353 105.192 29.0517H104C64.2355 29.0517 32 61.2873 32 101.052V110H232V101.052C232 61.2872 199.764 29.0517 160 29.0517L158.808 29.0517C158.935 30.0353 159 31.0365 159 32.0517Z" fill="white"/>
    </mask>
    <g mask="url(#${mask.current()})">
        <rect width="264" height="110" fill="${color.clothing(prng, options)}"/>
    </g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M163.638 110H232V101.052C232 62.7068 202.025 31.3628 164.229 29.1738C167.265 40.7709 169 54.1942 169 68.5C169 83.7087 167.039 97.92 163.638 110ZM100.785 29.1222C97.74 40.7311 96 54.173 96 68.5C96 83.7087 97.9607 97.92 101.362 110H32V101.052C32 62.3647 62.5123 30.8041 100.785 29.1222Z" fill="#3A4C5A"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M181 86L190.556 78.8331C191.999 77.7508 193.988 77.7683 195.412 78.8757L202 84L181 86Z" fill="#E6E6E6"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M101 28C95 57 106 110 106 110H90L76 74L82 65L76 59L95 29C95 29 98.0415 28.0539 101 28Z" fill="#2F4351"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M163 28C169 57 158 110 158 110H174L188 74L182 65L188 59L169 29C169 29 165.959 28.0539 163 28Z" fill="#2F4351"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M108 21.539C101.228 26.136 97 32.6563 97 39.8879C97 47.2888 101.428 53.9448 108.48 58.5565L114.421 53.8765L119 54.2079L118 51.0568L118.078 50.9955C111.978 47.853 108 42.7004 108 36.8768V21.539ZM156 36.8768C156 42.7004 152.022 47.853 145.922 50.9955L146 51.0568L145 54.2079L149.579 53.8765L155.52 58.5565C162.572 53.9448 167 47.2888 167 39.8879C167 32.6563 162.772 26.136 156 21.539V36.8768Z" fill="#F2F2F2"/>
`;
};
