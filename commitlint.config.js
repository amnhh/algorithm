module.exports = {
  extents:[
      "@commitlint/config-conventional"
  ],
  rules:{
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
        2,
        'always',
        [
            'build',
            'chore',
            'docs',
            'feat',
            'fix',
            'refactor',
            'style',
            'test',
        ]
    ]
  }
}