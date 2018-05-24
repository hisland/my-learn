/**
 * AppleScript to launch iterm2 terminals/tabs with configurable:
 * ~ Name <name>
 * ~ List of commands <cmds>
 * ~ Split behavior horizontal(h) or vertical(v) <split> :: (h, v)
 *
 * Run from terminal with `osascript iterm-launcher.js`.
 * Don't unfocus with the mouse/keyboard while executing the script.
 *
 * JS port of https://github.com/luismartingil/scripts/blob/master/iterm_launcher02.applescript
 */
var layout = [
  [
    {
      name: 'Pane 1',
      cmds: ['echo 1', 'ls'],
      split: 'v',
    },
    {
      name: 'Pane 2',
      cmds: ['echo 2', 'ls'],
    },
  ],
]

/****************************************************************/

var SystemEvents = Application('System Events')
var iTerm = Application('iTerm')

// Returns the last pane that was created in iTerm
function lastPane() {
  var len = iTerm.currentTerminal.sessions.length
  return iTerm.currentTerminal.sessions[len - 1]
}

for (var i = 0; i < layout.length; i++) {
  var tabItem = layout[i]

  // Create a new tab
  iTerm.currentTerminal.launch({ session: i + '' })

  for (var j = 0; j < tabItem.length; j++) {
    var paneItem = tabItem[j]

    // Initialize a new pane
    var pane = lastPane()
    pane.name = paneItem.name

    // Run the commands
    for (var k = 0; k < paneItem.cmds.length; k++) {
      pane.write({ text: paneItem.cmds[k] })
    }

    // Execute the split
    if ('split' in paneItem) {
      var splitChar = 'd'
      if (paneItem.split == 'h') {
        splitChar = 'D'
      }
      SystemEvents.keystroke(splitChar, { using: 'command down' })
    }
  }
}
