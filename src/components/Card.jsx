/* eslint-disable */
const Card = ({ bgcolor, title, subtitle }) => {
  return (
    <div className={bgcolor}>
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <p>{subtitle}</p>



    </div>
  )
}

export default Card