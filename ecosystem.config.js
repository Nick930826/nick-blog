module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: '47.99.134.126',
      ref: 'origin/master',
      repo: 'git@github.com:Nick930826/nick-blog.git',
      path: '/workspace/nick-blog',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm install && npm run build && npm run dev3',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
