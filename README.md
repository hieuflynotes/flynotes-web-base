# 1. INIT PROJECT 
    npx create-react-app fallow-time-calculator --template typescript
    git submodule add git@github.com:Flynotes/flynotes-menu.git src/submodules/flynotes-menu
    git submodule add git@github.com:Flynotes/flynotes-base.git src/submodules/flynotes-base

# 2.  Check import 
grep -r "from \"@material-ui/core\"" src/*