/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type { Theme } from '@stylexjs/stylex/lib/StyleXTypes';

import { defineVars } from '@stylexjs/stylex';

type TFonts = $ReadOnly<{
  sans: string,
  serif: string,
  mono: string,
  weight1: string,
  weight2: string,
  weight3: string,
  weight4: string,
  weight5: string,
  weight6: string,
  weight7: string,
  weight8: string,
  weight9: string,
  lineHeight00: string,
  lineHeight0: string,
  lineHeight1: string,
  lineHeight2: string,
  lineHeight3: string,
  lineHeight4: string,
  lineHeight5: string,
  letterSpacing0: string,
  letterSpacing1: string,
  letterSpacing2: string,
  letterSpacing3: string,
  letterSpacing4: string,
  letterSpacing5: string,
  letterSpacing6: string,
  letterSpacing7: string,
  size00: string,
  size0: string,
  size1: string,
  size2: string,
  size3: string,
  size4: string,
  size5: string,
  size6: string,
  size7: string,
  size8: string,
  sizeFluid0: string,
  sizeFluid1: string,
  sizeFluid2: string,
  sizeFluid3: string,
}>;

export const fonts: Theme<TFonts> = defineVars({
  sans: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
  serif: 'ui-serif,serif',
  mono: 'Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace',
  weight1: '100',
  weight2: '200',
  weight3: '300',
  weight4: '400',
  weight5: '500',
  weight6: '600',
  weight7: '700',
  weight8: '800',
  weight9: '900',
  lineHeight00: '.95',
  lineHeight0: '1.1',
  lineHeight1: '1.25',
  lineHeight2: '1.375',
  lineHeight3: '1.5',
  lineHeight4: '1.75',
  lineHeight5: '2',
  letterSpacing0: '-.05em',
  letterSpacing1: '.025em',
  letterSpacing2: '.050em',
  letterSpacing3: '.075em',
  letterSpacing4: '.150em',
  letterSpacing5: '.500em',
  letterSpacing6: '.750em',
  letterSpacing7: '1em',
  size00: '.5rem',
  size0: '.75rem',
  size1: '1rem',
  size2: '1.1rem',
  size3: '1.25rem',
  size4: '1.5rem',
  size5: '2rem',
  size6: '2.5rem',
  size7: '3rem',
  size8: '3.5rem',
  sizeFluid0: 'clamp(.75rem, 2vw, 1rem)',
  sizeFluid1: 'clamp(1rem, 4vw, 1.5rem)',
  sizeFluid2: 'clamp(1.5rem, 6vw, 2.5rem)',
  sizeFluid3: 'clamp(2rem, 9vw, 3.5rem)',
});