import type { ExtractResult, TableRow } from '../core/formats';
import { SAMPLE_CUSTOMER_BASE } from '../core/formats';

export const OCR_HEADERS = ['Invoice', 'Date', 'Customer', 'Description', 'Qty', 'Rate', 'Amount'];

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function invoiceLine(
  seed: number,
): string[] {
  const id = 2001 + seed;
  const month = ((seed + 3) % 12) + 1;
  const day = ((seed * 7) % 28) + 1;
  const cust = SAMPLE_CUSTOMER_BASE[seed % SAMPLE_CUSTOMER_BASE.length];
  const qty = ((seed % 9) + 1);
  const rate = [45, 60, 75, 85, 95, 110, 130, 180, 240][seed % 9];
  const amount = qty * rate;
  return [
    `INV-${id}`,
    `2026-${pad(month)}-${pad(day)}`,
    cust,
    ['Onboarding', 'Audit data', 'Licensing', 'Quarterly report', 'Integration', 'Training', 'Migrate', 'Compliance'][seed % 8],
    String(qty),
    `$${rate}.00`,
    `$${amount}.00`,
  ];
}

export function demoInvoices(count = 12): TableRow[] {
  return Array.from({ length: count }, (_, i) => ({
    cells: invoiceLine(i).map((text) => ({ text })),
  }));
}

export function demoOcrResult(count = 12): ExtractResult {
  return {
    sheets: [
      {
        name: 'Sheet1',
        rows: demoInvoices(count),
      },
    ],
    pages: 1,
    confidence: 88,
  };
}