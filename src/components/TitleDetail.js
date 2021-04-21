import React from "react"

const TitleDetail = ({name, opacity}) => {
  return (
    <div className={`flex-none content-center items-center border-primary border-2 rounded-lg h-14 opacity-${opacity} m-2`}>
      <p className="text-primary text-xl font-normal text-center w-full px-4 pt-3">
        {name}
      </p>
    </div>
  )
}

export default TitleDetail
