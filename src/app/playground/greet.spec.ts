
import { greet } from './greet';

describe('greet', () => {
  it('should include name in return messege', () => {
      expect(greet('Angular')).toContain('Angular')
  })
})
