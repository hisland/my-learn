tell application "iTerm2"
  set win1 to (create window with default profile)
  set sess1 to (current session of win1)
  tell sess1
    write text "cd /Users/hisland/Desktop/git-root/llmcxt-egg-vue2/egg2-server"
  end tell
  launch session
  tell current session of win1
    write text "echo 2"
  end tell
  select
end tell

