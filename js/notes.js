  postData: async function (params) {
    const url = 'http://localhost:3000/api/palettes'
    const response = await fetch(url, {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    })
    return response.json()
  }






  async savePalette (container) {
    const colorIds = this.colors.map(c => c.id)
    if (this.nameInput.textContent === 'New Palette') {
      alert('Please enter a new name')
    } else {
      await api.postData({
        palette: { name: this.nameInput.textContent, color_ids: colorIds }
      })
      render.palettes(container)
    }
  }


  // in backend palette controller
  // def palette_params()
  //       params.require(:palette).permit(:name, :color_ids => [])
  //   end
