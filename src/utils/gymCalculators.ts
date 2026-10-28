/**
 * Pure helper functions for gym calculations, plate loading, and WhatsApp URL formatting.
 */

export interface PlateBreakdown {
  targetWeight: number;
  barWeight: number;
  weightPerSide: number;
  platesPerSide: { weight: number; count: number }[];
  remainder: number;
}

/**
 * Calculates standard Olympic plates required per side for a given target weight in kg.
 * Standard plates: 25kg, 20kg, 15kg, 10kg, 5kg, 2.5kg, 1.25kg.
 */
export function calculateBarbellPlates(
  targetWeight: number,
  barWeight: number = 20
): PlateBreakdown {
  if (targetWeight <= barWeight) {
    return {
      targetWeight,
      barWeight,
      weightPerSide: 0,
      platesPerSide: [],
      remainder: 0,
    };
  }

  const weightNeeded = targetWeight - barWeight;
  let perSide = weightNeeded / 2;
  const platesPerSide: { weight: number; count: number }[] = [];
  const availablePlates = [25, 20, 15, 10, 5, 2.5, 1.25];

  for (const plate of availablePlates) {
    if (perSide >= plate) {
      const count = Math.floor(perSide / plate);
      platesPerSide.push({ weight: plate, count });
      perSide = Math.round((perSide - count * plate) * 100) / 100;
    }
  }

  return {
    targetWeight,
    barWeight,
    weightPerSide: (targetWeight - barWeight) / 2,
    platesPerSide,
    remainder: perSide,
  };
}

/**
 * Calculates membership pricing factoring in billing cycle discounts.
 */
export function calculateMembershipDiscount(
  monthlyPrice: number,
  billingCycle: 'monthly' | 'yearly',
  discountPercentage: number = 20
): { billedPrice: number; savings: number; perMonthEquivalent: number } {
  if (billingCycle === 'monthly') {
    return {
      billedPrice: monthlyPrice,
      savings: 0,
      perMonthEquivalent: monthlyPrice,
    };
  }

  const annualStandard = monthlyPrice * 12;
  const annualDiscounted = Math.round(annualStandard * (1 - discountPercentage / 100));
  const savings = annualStandard - annualDiscounted;
  const perMonthEquivalent = Math.round(annualDiscounted / 12);

  return {
    billedPrice: annualDiscounted,
    savings,
    perMonthEquivalent,
  };
}

/**
 * Formats a clean WhatsApp click-to-chat URL with international standard phone number and URI encoded message.
 */
export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Validates and formats international tel: href.
 */
export function buildTelLink(phoneNumber: string): string {
  const cleanPhone = phoneNumber.replace(/[\s()-]/g, '');
  return `tel:${cleanPhone}`;
}
