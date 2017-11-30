# jumpstart
## Usage
```
cd /path/to/my/repo

git remote add jumpstart https://github.com/shfrmn/jumpstart

git fetch jumpstart

# to create a local branch based on a remote one
git checkout -b <branch_name> jumpstart/<branch_name>

# to merge a remote branch right away
git merge jumpstart/<branch_name> --allow-unrelated-histories
```
## Adding independent presets
```
git checkout --orphan <branch_name>

git rm -rf
```
