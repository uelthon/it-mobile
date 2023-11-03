const fs = require('fs')
const path = require('path')

const inputFolderPath = './src/components/shared/icons' // Ruta de la carpeta con archivos .js
const outputFolderPath = './src/components/shared/icons-ts' // Ruta de la carpeta de salida

function convertJsToTsx (filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const tsxCode = fileContent.replace(/\.js/g, '.tsx')

  const newFilePath = path.join(outputFolderPath, path.basename(filePath).replace('.js', '.tsx'))
  fs.writeFileSync(newFilePath, tsxCode, 'utf8')
  console.log(`Converted ${path.basename(filePath)} to .tsx`)
}

function convertJsFilesToTsx () {
  try {
    const files = fs.readdirSync(inputFolderPath)
    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = path.join(inputFolderPath, file)
        convertJsToTsx(filePath)
      }
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

convertJsFilesToTsx()
