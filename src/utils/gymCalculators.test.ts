import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBarbellPlates,
  calculateMembershipDiscount,
  buildWhatsAppLink,
  buildTelLink,
} from './gymCalculators.ts';

test('calculateBarbellPlates correctly breaks down plates for 100kg total with 20kg bar', () => {
  const result = calculateBarbellPlates(100, 20);
  assert.equal(result.targetWeight, 100);
  assert.equal(result.weightPerSide, 40); // (100 - 20) / 2 = 40kg per side
  // 40kg per side should be 1x 25kg + 1x 15kg
  assert.deepEqual(result.platesPerSide, [
    { weight: 25, count: 1 },
    { weight: 15, count: 1 },
  ]);
  assert.equal(result.remainder, 0);
});

test('calculateBarbellPlates returns zero plates if target is below or equal to bar weight', () => {
  const result = calculateBarbellPlates(20, 20);
  assert.equal(result.weightPerSide, 0);
  assert.equal(result.platesPerSide.length, 0);
});

test('calculateMembershipDiscount calculates 20% discount correctly for yearly cycle', () => {
  const monthly = 3000;
  const yearlyResult = calculateMembershipDiscount(monthly, 'yearly', 20);
  // Standard annual: 36,000. 20% off = 28,800
  assert.equal(yearlyResult.billedPrice, 28800);
  assert.equal(yearlyResult.savings, 7200);
  assert.equal(yearlyResult.perMonthEquivalent, 2400);

  const monthlyResult = calculateMembershipDiscount(monthly, 'monthly', 20);
  assert.equal(monthlyResult.billedPrice, 3000);
  assert.equal(monthlyResult.savings, 0);
});

test('buildWhatsAppLink formats international link without spaces or special symbols', () => {
  const link = buildWhatsAppLink('+91 98765-43210', 'Hello Gym Team!');
  assert.equal(link, 'https://wa.me/919876543210?text=Hello%20Gym%20Team!');
});

test('buildTelLink strips formatting spaces and dashes', () => {
  const tel = buildTelLink('+91 98765 43210');
  assert.equal(tel, 'tel:+919876543210');
});
