Promise.all([import('../pkg/game_bg'), import('../pkg/game.js')]).then(
  function([wasm, game]) {
    const { memory } = wasm
    const { Universe, Cell } = game

    const CELL_SIZE = 8 // px
    const GRID_COLOR = '#eee'
    const DEAD_COLOR = '#FFFFFF'
    const ALIVE_COLOR = '#000000'

    const universe = Universe.new()
    const width = universe.width()
    const height = universe.height()

    const canvas = document.getElementById('game-of-life-canvas')
    canvas.height = (CELL_SIZE + 1) * height + 1
    canvas.width = (CELL_SIZE + 1) * width + 1

    const ctx = canvas.getContext('2d')

    const drawGrid = () => {
      ctx.beginPath()
      ctx.strokeStyle = GRID_COLOR

      // Vertical lines.
      for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0)
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1)
      }

      // Horizontal lines.
      for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1)
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1)
      }

      ctx.stroke()
    }

    const getIndex = (row, column) => {
      return row * width + column
    }

    const drawCells = () => {
      const cellsPtr = universe.cells()
      const cells = new Uint8Array(memory.buffer, cellsPtr, width * height)

      ctx.beginPath()

      for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
          const idx = getIndex(row, col)

          ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR

          ctx.fillRect(
            col * (CELL_SIZE + 1) + 1,
            row * (CELL_SIZE + 1) + 1,
            CELL_SIZE,
            CELL_SIZE
          )
        }
      }

      ctx.stroke()
    }

    let animationId = null
    const renderLoop = () => {
      universe.tick()

      drawGrid()
      drawCells()

      animationId = setTimeout(renderLoop, 100)
    }
    const isPaused = () => {
      return animationId === null
    }

    const playPauseButton = document.getElementById('play-pause')

    const play = () => {
      playPauseButton.textContent = '⏸'
      renderLoop()
    }

    const pause = () => {
      playPauseButton.textContent = '▶'
      clearTimeout(animationId)
      animationId = null
    }

    playPauseButton.addEventListener('click', event => {
      if (isPaused()) {
        play()
      } else {
        pause()
      }
    })

    canvas.addEventListener('click', event => {
      const boundingRect = canvas.getBoundingClientRect()

      const scaleX = canvas.width / boundingRect.width
      const scaleY = canvas.height / boundingRect.height

      const canvasLeft = (event.clientX - boundingRect.left) * scaleX
      const canvasTop = (event.clientY - boundingRect.top) * scaleY

      const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1)
      const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1)

      universe.toggle_cell(row, col)

      drawGrid()
      drawCells()
    })
  }
)

// ;(function() {
//   let rs = ''
//   for(let ii=0; ii<64; ii++){
//     for(let jj=0; jj<64; jj++){
//       rs += '-'+(ii*64+jj)
//     }
//     rs += '\n'
//   }
//   document.getElementById('table').innerHTML = rs
// })();
