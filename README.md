# github-api-client

Deployed at https://leannaweller.github.io

## Master is automatically rebuilt on every commit to source feature

1. Create a file post-commit in ${project_dir}/.git/hooks directory
2. Add this code to file

```shell
#!/bin/sh
branch=$(git rev-parse --abbrev-ref HEAD);
echo $branch;
if [ "$branch" = "source" ]; then
    echo "Build started"
    git checkout master
    git merge source
    npm run build
    git add .
    git commit --m "build"
    git checkout source
fi;

```





