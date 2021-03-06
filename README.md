# RIL-DOCS

## Code of Conduct

### Working Enviroment

#### GitHub
https://github.com/chrisli30/RIL-DOCS

#### Markdown Editor
Visual Studio Code for Mac

#### Install Plugin
Markdown Preview Enhance

Once plugin installation completed, press Command + Shift + P to call Visual Studio Code command line, and type Markdown,and select "Markdown Preview Enhanced：Open Preview on the side" from the dropdown list of result. Then you will see Markdown preview on the right of the screen in real-time.

#### Git subtree
[Git subtree: the alternative to Git submodule](https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree)
1. Add a sub-folder
`git subtree add --prefix <sub-folder-name> <remote-repository> <branch> --squash`

2. Update the code of from the upstream repository do a git subtree pull:
`git subtree pull --prefix <sub-folder-name> <remote-repository> <branch> --squash`

3. Make code changes back upstream
`git remote add <sub-folder-name> <remote-repository>`
`git subtree push --prefix=.vim/bundle/tpope-vim-surround/ durdn-vim-surround master`


- After this we’re ready and we can open a pull-request to the maintainer of the package.



### Work Flow
1. Branch off from master
Create a local branch and name it with the name of group of changes
```
git checkout -b update_getting_started_page
```

2. Make updates with local commits
```
git add .
git commmit -m "Update header of Getting Started page"
git push
```

3. Create a Pull Request on Github upon completion
4. Wait for review and make adjustment commits
5. Squash merge Pull Request upon approval and delete the branch on Github

### Formatting
1. The first level header of a page should be H2, and cap first letter of every word like `#### First Level Header`.
1. The second level is H4 and doens't need to cap the first letter. For example, `## Second level header`
1. The third level use bold. For example, `__This is the third leve__`


### Markdown Basics

1. Callout

Code: 
```
> __Minimal Requirement__
Make sure your system meet the [minimal requirement](http://google.com) before installing the RSK nodes on it.  
```
Example:
> __Minimal Requirement__
Make sure your system meet the [minimal requirement](http://google.com) before installing the RSK nodes on it.  

2. Code
Code:
```
    ```
    sudo service rsk start
    ```
```

Example:
```
sudo service rsk start
```

3. Images
* Inline-style: 
Code:

```
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
```

Example:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

* Reference-style: 

Code:
```
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```

Example:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

4. DO NOT use `</br>` outside `<div></div>`
