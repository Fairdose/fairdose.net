function Typewriter (text, ref, tOut, tPos = 0, domEl) {
  this.ref = ref
  this.tOut = tOut
  this.tPos = tPos
  this.type = function () {
    if (!this.text.includes('>>>')) {
      const t_parsing = `>>>
> parsing...
> parsing..........
> parsing...............................
`
      this.text = this.text + t_parsing
    }
    this.ref.value = text.substring(0, this.tPos) + '█'
    if (this.tPos++ !== text.length) {
      this.tOut = setTimeout(this.type, 1)
    } else {
      clearTimeout(this.tOut)
      const trimLine = text.indexOf('>>>')
      domEl.outerHTML = text.slice(0, trimLine)
    }
  }
}

export default Typewriter
