import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import crypto from 'crypto'

import { verifySignature } from '../src/utils/github-signature.js'

describe('verifySignature', () => {
  const payload = JSON.stringify({ hello: 'world' })
  const secret = 'test-secret'

  it('returns false when secret is missing', () => {
    assert.strictEqual(verifySignature(payload, 'sha256=abc', undefined), false)
  })

  it('returns false when signature is missing', () => {
    assert.strictEqual(verifySignature(payload, undefined, secret), false)
  })

  it('returns false for mismatched signature lengths without throwing', () => {
    assert.strictEqual(verifySignature(payload, 'sha256=short', secret), false)
  })

  it('returns false for invalid signature content', () => {
    const invalidSignature = 'sha256=' + '0'.repeat(64)
    assert.strictEqual(verifySignature(payload, invalidSignature, secret), false)
  })

  it('returns true for a valid signature', () => {
    const hmac = crypto.createHmac('sha256', secret)
    hmac.update(payload, 'utf-8')
    const validSignature = `sha256=${hmac.digest('hex')}`

    assert.strictEqual(verifySignature(payload, validSignature, secret), true)
  })
})
