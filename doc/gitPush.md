#### Attempt to 'git push' when Changes are Made in non-master Branch (AutomateTemplates).
```bash
Jasons-MBP-4:JasonWherry.github.io export PS1='gitRepo '
gitRepo git branch
* AutomateTemplates
  master
gitRepo git status
On branch AutomateTemplates
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	gitPush.md

nothing added to commit but untracked files present (use "git add" to track)

gitRepo git add .

gitRepo git status
On branch AutomateTemplates
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   gitPush.md

gitRepo git commit -m "documentation for managing commits from a new branch (non-master branch)"
[AutomateTemplates 3c22a06] documentation for managing commits from a new branch (non-master branch)
 1 file changed, 41 insertions(+)
 create mode 100644 gitPush.md
gitRepo git status
On branch AutomateTemplates
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

gitRepo git push
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use

    git push origin HEAD:master

To push to the branch of the same name on the remote, use

    git push origin HEAD

To choose either option permanently, see push.default in 'git help config'.

gitRepo git push origin HEAD
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 826 bytes | 826.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/JasonWherry/JasonWherry.github.io.git
   86efbbd..3c22a06  HEAD -> AutomateTemplates

gitRepo git status
On branch AutomateTemplates
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

gitRepo git push
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use

    git push origin HEAD:master

To push to the branch of the same name on the remote, use

    git push origin HEAD

To choose either option permanently, see push.default in 'git help config'.

gitRepo git push origin HEAD:master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/JasonWherry/JasonWherry.github.io.git
   86efbbd..3c22a06  HEAD -> master
gitRepo 
```

##### The last command pushes the content from * AutomateTemplates --> master
```bash
gitRepo git push origin HEAD 	# Pushes the local changes made in the current branch, * AutomateTemplates, from local to remote branch

gitRepo git push origin HEAD:master # Pushes the local changes made in the current branch, * AutomateTemplates, from local to remote master branch

gitRepo git checkout master 	# switch to master branch
Switched to branch 'master'
Your branch is behind 'origin/master' by 3 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

gitRepo git pull				# pull changes that we made, then commited, and lastly pushed in the AutomateTemplates branch
Updating c0d7386..3c22a06
Fast-forward
 gitPush.md | 41 +++++++++++++++++++++++++++++++++++++++++
 1 file changed, 41 insertions(+)
 create mode 100644 gitPush.md
 ```
##### Boom, now we have the modifications in production, AKA master branch
