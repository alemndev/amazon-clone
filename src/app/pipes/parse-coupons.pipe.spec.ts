import { ParseCouponsPipe } from './parse-coupons.pipe';

describe('ParseCouponsPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseCouponsPipe();
    expect(pipe).toBeTruthy();
  });
});
