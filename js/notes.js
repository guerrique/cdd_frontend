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
//   class PalettesController < ApplicationController
//     def index
//         palettes = params[:count] ? Palette.all.order(created_at: :desc).limit(params[:count]) : Palette.all.order(created_at: :desc)
//         render :json => palettes,
//             :include => {
//                 :colors => {:only => [:id, :name, :hex]}
//             },
//             :except => [:created_at, :updated_at]
//     end

//     def create
//         palette = Palette.new_from_hash(palette_params)
//         render json: {message: "#{palette.name} Saved!"}
//     end

//     private

//     def palette_params()
//         params.require(:palette).permit(:name, :color_ids => [])
//     end

// end

// in models/palette.rb
// class Palette < ApplicationRecord
//     has_and_belongs_to_many :colors

//     def self.newRandom()
//         palette = Palette.new(name: "palette-#{("a".."z").to_a.concat((0..9).to_a).shuffle.slice(0,4).join("")}")
//         palette.colors.concat(Color.all.sample(5))
//         palette.save()
//         return palette
//     end

//     def self.new_from_hash(info)
//         newPalette = Palette.new(name: info[:name])

//         info[:color_ids].each do |cid|
//             newPalette.colors << Color.find(cid)
//         end

//         newPalette.save()
//         return newPalette
//     end
end
