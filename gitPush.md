#### Attempt to 'git push' when Changes are Made in non-master Branch (AutomateTemplates).
```bash
Jasons-MBP-4:JasonWherry.github.io jasonwherry$ git branch
* AutomateTemplates
  master

Jasons-MBP-4:JasonWherry.github.io jasonwherry$ git status
On branch AutomateTemplates
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

Jasons-MBP-4:JasonWherry.github.io jasonwherry$ git push
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use

    git push origin HEAD:master

To push to the branch of the same name on the remote, use

    git push origin HEAD

To choose either option permanently, see push.default in 'git help config'.

Jasons-MBP-4:JasonWherry.github.io jasonwherry$ git push origin HEAD:master

Everything up-to-date

Jasons-MBP-4:JasonWherry.github.io jasonwherry$ git push origin HEAD
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/JasonWherry/JasonWherry.github.io.git
   36a16df..86efbbd  HEAD -> AutomateTemplates

```

##### The last command; Pushes the content from * AutomateTemplates --> master
```bash
git push origin HEAD # Pushes the content from the current branch, * AutomateTemplates, to the master branch
```
##### 