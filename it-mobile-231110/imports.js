import fs from 'node:fs/promises'

const path = './src/assets/images/solutions'

const createImports = async () => {
  const files = await fs.readdir(path)
  for (const file of files) {
    const name = file.replace('.gif').split(' ').join('')
    const pathFile = `import ${name} from '@/assets/images/solutions/${file}';`
    console.log(pathFile)
  }
}

createImports()
