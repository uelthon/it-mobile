export function stringDivider (inputString: string, partes: number) {
  const palabras = inputString.split(' ')

  const longitudParte = Math.ceil(palabras.length / partes)

  // Utilizar la función `Array.from` para crear un array de partes
  const resultado = Array.from({ length: partes }, (_, indice) => {
    const inicio = indice * longitudParte
    const fin = inicio + longitudParte
    return palabras.slice(inicio, fin).join(' ')
  })

  return resultado
}
