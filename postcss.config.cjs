// postcss.config.cjs (✔ 올바른 방식)
const tailwindcss = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        tailwindcss(),
        autoprefixer()
    ]
}
