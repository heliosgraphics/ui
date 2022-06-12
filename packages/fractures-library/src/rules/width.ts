import type { FractureRuleType } from "../../types/css-rules";

export const width: Array<FractureRuleType> = [
  { selector: 'w-0', declarations: { width: '0' }, hasBreakpoints: true, description: 'Width is 0 pixel.' },
  { selector: 'w-viewport', declarations: { width: '100vw' }, hasBreakpoints: true, description: 'Width is 100 viewport width.' },
  { selector: 'w-px', declarations: { width: 'var(--box-px)' }, hasBreakpoints: true },
  { selector: 'w-1', declarations: { width: 'var(--box-1)' }, hasBreakpoints: true },
  { selector: 'w-2', declarations: { width: 'var(--box-2)' }, hasBreakpoints: true },
  { selector: 'w-3', declarations: { width: 'var(--box-3)' }, hasBreakpoints: true },
  { selector: 'w-4', declarations: { width: 'var(--box-4)' }, hasBreakpoints: true },
  { selector: 'w-5', declarations: { width: 'var(--box-5)' }, hasBreakpoints: true },
  { selector: 'w-6', declarations: { width: 'var(--box-6)' }, hasBreakpoints: true },
  { selector: 'w-7', declarations: { width: 'var(--box-7)' }, hasBreakpoints: true },
  { selector: 'w-8', declarations: { width: 'var(--box-8)' }, hasBreakpoints: true },
  { selector: 'w-9', declarations: { width: 'var(--box-9)' }, hasBreakpoints: true },
  { selector: 'w-10', declarations: { width: 'var(--box-10)' }, hasBreakpoints: true },
  { selector: 'w-11', declarations: { width: 'var(--box-11)' }, hasBreakpoints: true },
  { selector: 'w-11', declarations: { width: 'var(--box-11)' }, hasBreakpoints: true },
  { selector: 'w-12', declarations: { width: 'var(--box-12)' }, hasBreakpoints: true },
  { selector: 'w-12', declarations: { width: 'var(--box-12)' }, hasBreakpoints: true },
  { selector: 'w-13', declarations: { width: 'var(--box-13)' }, hasBreakpoints: true },
  { selector: 'w-13', declarations: { width: 'var(--box-13)' }, hasBreakpoints: true },
  { selector: 'w-14', declarations: { width: 'var(--box-14)' }, hasBreakpoints: true },
  { selector: 'w-14', declarations: { width: 'var(--box-14)' }, hasBreakpoints: true },
  { selector: 'w-15', declarations: { width: 'var(--box-15)' }, hasBreakpoints: true },
  { selector: 'w-15', declarations: { width: 'var(--box-15)' }, hasBreakpoints: true },
  { selector: 'w-16', declarations: { width: 'var(--box-16)' }, hasBreakpoints: true },
  { selector: 'w-24', declarations: { width: 'var(--box-24)' }, hasBreakpoints: true },
  { selector: 'w-32', declarations: { width: 'var(--box-32)' }, hasBreakpoints: true },
  { selector: 'w-40', declarations: { width: 'var(--box-40)' }, hasBreakpoints: true },
  { selector: 'w-48', declarations: { width: 'var(--box-48)' }, hasBreakpoints: true },

  { selector: 'wp-10', declarations: { width: '10%' }, hasBreakpoints: true },
  { selector: 'wp-15', declarations: { width: '15%' }, hasBreakpoints: true },
  { selector: 'wp-20', declarations: { width: '20%' }, hasBreakpoints: true },
  { selector: 'wp-25', declarations: { width: '25%' }, hasBreakpoints: true },
  { selector: 'wp-30', declarations: { width: '30%' }, hasBreakpoints: true },
  { selector: 'wp-33', declarations: { width: 'calc(100%/3)' }, hasBreakpoints: true },
  { selector: 'wp-35', declarations: { width: '35%' }, hasBreakpoints: true },
  { selector: 'wp-40', declarations: { width: '40%' }, hasBreakpoints: true },
  { selector: 'wp-45', declarations: { width: '45%' }, hasBreakpoints: true },
  { selector: 'wp-50', declarations: { width: '50%' }, hasBreakpoints: true },
  { selector: 'wp-55', declarations: { width: '55%' }, hasBreakpoints: true },
  { selector: 'wp-60', declarations: { width: '60%' }, hasBreakpoints: true },
  { selector: 'wp-66', declarations: { width: 'calc((100%/3)*2)' }, hasBreakpoints: true },
  { selector: 'wp-65', declarations: { width: '65%' }, hasBreakpoints: true },
  { selector: 'wp-70', declarations: { width: '70%' }, hasBreakpoints: true },
  { selector: 'wp-75', declarations: { width: '75%' }, hasBreakpoints: true },
  { selector: 'wp-80', declarations: { width: '80%' }, hasBreakpoints: true },
  { selector: 'wp-85', declarations: { width: '85%' }, hasBreakpoints: true },
  { selector: 'wp-90', declarations: { width: '90%' }, hasBreakpoints: true },
  { selector: 'wp-95', declarations: { width: '95%' }, hasBreakpoints: true },
  { selector: 'wp-100', declarations: { width: '100%' }, hasBreakpoints: true },

  { selector: 'wmax-0', declarations: { maxWidth: '0' } },
  { selector: 'wmax-viewport', declarations: { maxWidth: '100vw' }, description: 'Max width is 100 viewport width.' },
  { selector: 'wmax-px', declarations: { maxWidth: 'var(--box-px)' } },
  { selector: 'wmax-1', declarations: { maxWidth: 'var(--box-1)' } },
  { selector: 'wmax-2', declarations: { maxWidth: 'var(--box-2)' } },
  { selector: 'wmax-3', declarations: { maxWidth: 'var(--box-3)' } },
  { selector: 'wmax-4', declarations: { maxWidth: 'var(--box-4)' } },
  { selector: 'wmax-5', declarations: { maxWidth: 'var(--box-5)' } },
  { selector: 'wmax-6', declarations: { maxWidth: 'var(--box-6)' } },
  { selector: 'wmax-7', declarations: { maxWidth: 'var(--box-7)' } },
  { selector: 'wmax-8', declarations: { maxWidth: 'var(--box-8)' } },
  { selector: 'wmax-9', declarations: { maxWidth: 'var(--box-9)' } },
  { selector: 'wmax-10', declarations: { maxWidth: 'var(--box-10)' } },
  { selector: 'wmax-11', declarations: { maxWidth: 'var(--box-11)' } },
  { selector: 'wmax-11', declarations: { maxWidth: 'var(--box-11)' } },
  { selector: 'wmax-12', declarations: { maxWidth: 'var(--box-12)' } },
  { selector: 'wmax-12', declarations: { maxWidth: 'var(--box-12)' } },
  { selector: 'wmax-13', declarations: { maxWidth: 'var(--box-13)' } },
  { selector: 'wmax-13', declarations: { maxWidth: 'var(--box-13)' } },
  { selector: 'wmax-14', declarations: { maxWidth: 'var(--box-14)' } },
  { selector: 'wmax-14', declarations: { maxWidth: 'var(--box-14)' } },
  { selector: 'wmax-15', declarations: { maxWidth: 'var(--box-15)' } },
  { selector: 'wmax-15', declarations: { maxWidth: 'var(--box-15)' } },
  { selector: 'wmax-16', declarations: { maxWidth: 'var(--box-16)' } },
  { selector: 'wmax-24', declarations: { maxWidth: 'var(--box-24)' } },
  { selector: 'wmax-32', declarations: { maxWidth: 'var(--box-32)' } },
  { selector: 'wmax-40', declarations: { maxWidth: 'var(--box-40)' } },
  { selector: 'wmax-48', declarations: { maxWidth: 'var(--box-48)' } },
  { selector: 'wpmax-15', declarations: { maxWidth: '15%' } },
  { selector: 'wpmax-10', declarations: { maxWidth: '10%' } },
  { selector: 'wpmax-20', declarations: { maxWidth: '20%' } },
  { selector: 'wpmax-25', declarations: { maxWidth: '25%' } },
  { selector: 'wpmax-30', declarations: { maxWidth: '30%' } },
  { selector: 'wpmax-33', declarations: { maxWidth: 'calc(100%/3)' } },
  { selector: 'wpmax-35', declarations: { maxWidth: '35%' } },
  { selector: 'wpmax-40', declarations: { maxWidth: '40%' } },
  { selector: 'wpmax-45', declarations: { maxWidth: '45%' } },
  { selector: 'wpmax-50', declarations: { maxWidth: '50%' } },
  { selector: 'wpmax-55', declarations: { maxWidth: '55%' } },
  { selector: 'wpmax-60', declarations: { maxWidth: '60%' } },
  { selector: 'wpmax-66', declarations: { maxWidth: 'calc((100%/3)*2)' } },
  { selector: 'wpmax-65', declarations: { maxWidth: '65%' } },
  { selector: 'wpmax-70', declarations: { maxWidth: '70%' } },
  { selector: 'wpmax-75', declarations: { maxWidth: '75%' } },
  { selector: 'wpmax-80', declarations: { maxWidth: '80%' } },
  { selector: 'wpmax-85', declarations: { maxWidth: '85%' } },
  { selector: 'wpmax-90', declarations: { maxWidth: '90%' } },
  { selector: 'wpmax-95', declarations: { maxWidth: '95%' } },
  { selector: 'wpmax-100', declarations: { maxWidth: '100%' } },

  { selector: 'wmin-0', declarations: { minWidth: '0' } },
  { selector: 'wmin-viewport', declarations: { minWidth: '100vw' }, description: 'Min width is 100 viewport width.' },
  { selector: 'wmin-px', declarations: { minWidth: 'var(--box-px)' } },
  { selector: 'wmin-1', declarations: { minWidth: 'var(--box-1)' } },
  { selector: 'wmin-2', declarations: { minWidth: 'var(--box-2)' } },
  { selector: 'wmin-3', declarations: { minWidth: 'var(--box-3)' } },
  { selector: 'wmin-4', declarations: { minWidth: 'var(--box-4)' } },
  { selector: 'wmin-5', declarations: { minWidth: 'var(--box-5)' } },
  { selector: 'wmin-6', declarations: { minWidth: 'var(--box-6)' } },
  { selector: 'wmin-7', declarations: { minWidth: 'var(--box-7)' } },
  { selector: 'wmin-8', declarations: { minWidth: 'var(--box-8)' } },
  { selector: 'wmin-9', declarations: { minWidth: 'var(--box-9)' } },
  { selector: 'wmin-10', declarations: { minWidth: 'var(--box-10)' } },
  { selector: 'wmin-11', declarations: { minWidth: 'var(--box-11)' } },
  { selector: 'wmin-11', declarations: { minWidth: 'var(--box-11)' } },
  { selector: 'wmin-12', declarations: { minWidth: 'var(--box-12)' } },
  { selector: 'wmin-12', declarations: { minWidth: 'var(--box-12)' } },
  { selector: 'wmin-13', declarations: { minWidth: 'var(--box-13)' } },
  { selector: 'wmin-13', declarations: { minWidth: 'var(--box-13)' } },
  { selector: 'wmin-14', declarations: { minWidth: 'var(--box-14)' } },
  { selector: 'wmin-14', declarations: { minWidth: 'var(--box-14)' } },
  { selector: 'wmin-15', declarations: { minWidth: 'var(--box-15)' } },
  { selector: 'wmin-15', declarations: { minWidth: 'var(--box-15)' } },
  { selector: 'wmin-16', declarations: { minWidth: 'var(--box-16)' } },
  { selector: 'wmin-24', declarations: { minWidth: 'var(--box-24)' } },
  { selector: 'wmin-32', declarations: { minWidth: 'var(--box-32)' } },
  { selector: 'wmin-40', declarations: { minWidth: 'var(--box-40)' } },
  { selector: 'wmin-48', declarations: { minWidth: 'var(--box-48)' } },
  { selector: 'wpmin-15', declarations: { minWidth: '15%' } },
  { selector: 'wpmin-10', declarations: { minWidth: '10%' } },
  { selector: 'wpmin-20', declarations: { minWidth: '20%' } },
  { selector: 'wpmin-25', declarations: { minWidth: '25%' } },
  { selector: 'wpmin-30', declarations: { minWidth: '30%' } },
  { selector: 'wpmin-33', declarations: { minWidth: 'calc(100%/3)' } },
  { selector: 'wpmin-35', declarations: { minWidth: '35%' } },
  { selector: 'wpmin-40', declarations: { minWidth: '40%' } },
  { selector: 'wpmin-45', declarations: { minWidth: '45%' } },
  { selector: 'wpmin-50', declarations: { minWidth: '50%' } },
  { selector: 'wpmin-55', declarations: { minWidth: '55%' } },
  { selector: 'wpmin-60', declarations: { minWidth: '60%' } },
  { selector: 'wpmin-66', declarations: { minWidth: 'calc((100%/3)*2)' } },
  { selector: 'wpmin-65', declarations: { minWidth: '65%' } },
  { selector: 'wpmin-70', declarations: { minWidth: '70%' } },
  { selector: 'wpmin-75', declarations: { minWidth: '75%' } },
  { selector: 'wpmin-80', declarations: { minWidth: '80%' } },
  { selector: 'wpmin-85', declarations: { minWidth: '85%' } },
  { selector: 'wpmin-90', declarations: { minWidth: '90%' } },
  { selector: 'wpmin-95', declarations: { minWidth: '95%' } },
  { selector: 'wpmin-100', declarations: { minWidth: '100%' } },
];
