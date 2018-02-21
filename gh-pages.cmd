cd dist
git rm -rf .git
git init
git add .
git commit -a -m "deploy to Github pages"
git push --force https://github.com/milkmidi/2018_vue_jsx_storybook.git master:gh-pages

pause