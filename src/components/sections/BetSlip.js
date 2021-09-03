import React from "react"
import {PrimaryButton} from '../elements/Buttons'
import tw from 'twin.macro'


function BetSlip({
  className = "yoooooooooooo",
  image = "",
  title = "eeeeeeeeeeeeeeeeeeeeeeeeee",
  text = "dasdasdasdasd",
  buttonText = 'place bet',
  buttonLink = "ffffffeeeee",
  html = null,
  ...newProps
}) {
  let finalClass = `${className} w-72 max-w-full border border-gray-300 rounded-sm bg-white`
  return (
    <div className={finalClass} tw="w-72 max-w-full border border-gray-300 rounded-sm bg-white">
      {image && (
        <div tw="w-full h-48">
          <img src={image} tw="w-full h-full object-cover" />
        </div>
      )}
      <div tw="p-6">
        {title && <h5 tw="text-lg font-medium">{title}</h5>}
        {text && <p className={`${title }`} tw='mt-2'>{text}</p>}
        {html}
        {buttonText && (
          <div tw="mt-4 flex">
            <PrimaryButton link={buttonLink}>{buttonText}</PrimaryButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default BetSlip;