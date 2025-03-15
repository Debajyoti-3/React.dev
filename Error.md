# Errors and Solution

## 1. " EPERM: operation not permitted, rmdir ":

Usually happens due to permission issues, file locks, or OneDrive interference. Let’s go over some possible causes and solutions.

There can be many causes for this error but which helps me a lot is 'clearing Vite's Cache'.

To clear Vite's cache run this below command in Powershell -

```powershell
Remove-Item -Recurse -Force node_modules/.vite
npm cache clean --force
npm install
```