import crypto from 'crypto'

export const verifySignature = (payload, signature, secret) => {
  if (!secret || !signature || typeof payload !== 'string') {
    return false
  }

  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(payload, 'utf-8')
  const digest = `sha256=${hmac.digest('hex')}`

  const digestBuffer = Buffer.from(digest)
  const signatureBuffer = Buffer.from(signature)

  if (digestBuffer.length !== signatureBuffer.length) {
    return false
  }

  try {
    return crypto.timingSafeEqual(digestBuffer, signatureBuffer)
  } catch (error) {
    return false
  }
}
