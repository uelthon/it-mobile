export default function cleanPhoneNumber (numero: string) {
  const numerosLimpio = numero.replace(/[^+\d]/g, '')
  return numerosLimpio
}
