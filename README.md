# jumpstart
## Usage
```
cd /path/to/my/repo

git remote add jumpstart https://github.com/shfrmn/jumpstart

git fetch jumpstart

git merge jumpstart/<branch_name> --allow-unrelated-histories
```
## Adding independent presets
```
git checkout --orphan <branch_name>

git rm -rf
```
