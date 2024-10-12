ps aux | grep vscode | grep -v grep | awk '{print $2}' | xargs kill
